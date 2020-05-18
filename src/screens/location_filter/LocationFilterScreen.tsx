import React, { useEffect, useState } from 'react'
import styles from './styles'
import { View } from 'react-native'
import { Options } from 'react-native-navigation'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import Input from './components/input/Input'
import ResultsList from './components/results_list/ResultsList'
import RadiiList from './components/radii_list/RadiiList'
import { ThrottleNavigation } from '../../utils/ThrottleNavigation'
import { isResultsEmpty, mapRadiusToLocation, mapSearchResultToLocation } from './mapper'
import { useLocationFilter } from './useLocationFilter'
import { ILocationVM } from './LocationVM'

interface Props {
    componentId?: string
    onLocationSelected?: (location: ILocationVM) => void
}
const defaultProps: Props = {}

const LocationFilterScreen = ({ componentId, onLocationSelected }: Props) => {
    const [input, setInput] = useState<string>('')
    const [{ results, radii }, searchFor, searchForNearbyCities] = useLocationFilter(input)

    useEffect(() => {
        searchForNearbyCities().catch()
    }, [])
    useEffect(() => {
        input && searchFor().catch()
    }, [input])

    const handleSearchTextChange = (value: string) => setInput(value)
    const handleClearPress = () => setInput('')
    const handleRadiusItemPress = (index: number) => {
        onLocationSelected && onLocationSelected(mapRadiusToLocation(radii[index]))
        ThrottleNavigation.pop(componentId).catch()
    }
    const handleResultItemPress = (sectionIndex: number, index: number) => {
        onLocationSelected &&
            onLocationSelected(mapSearchResultToLocation(results[sectionIndex].data[index]))
        ThrottleNavigation.pop(componentId).catch()
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input
                    textInputProps={{
                        onChangeText: handleSearchTextChange,
                        value: input,
                    }}
                    onClearPress={handleClearPress}
                    clearVisible={!!input.length}
                />
            </View>
            <View style={styles.listContainer}>
                {!isResultsEmpty(results) && input ? (
                    <ResultsList data={results} onPress={handleResultItemPress} />
                ) : (
                    <RadiiList data={radii} onPress={handleRadiusItemPress} />
                )}
            </View>
        </View>
    )
}
LocationFilterScreen.defaultProps = defaultProps
LocationFilterScreen.options = (): Options => ({
    ...waitForRenderOptions(),
    bottomTabs: {
        visible: false,
    },
})

export default LocationFilterScreen
