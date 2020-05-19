import React, { useEffect, useState } from 'react'
import styles from './styles'
import { View } from 'react-native'
import { ILocationVM } from './LocationVM'
import Input from './components/input/Input'
import { Options } from 'react-native-navigation'
import { useLocationFilter } from './useLocationFilter'
import RadiiList from './components/radii_list/RadiiList'
import ResultsList from './components/results_list/ResultsList'
import { waitForRenderOptions } from '../../utils/navigationUtils'
import { isResultsEmpty, mapRadiusToLocation, mapSearchResultToLocation } from './mapper'

interface Props {
    onLocationSelected?: (location: ILocationVM) => void
}
const defaultProps: Props = {}

const LocationFilterScreen = ({ onLocationSelected }: Props) => {
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
    }
    const handleResultItemPress = (sectionIndex: number, index: number) => {
        onLocationSelected &&
            onLocationSelected(mapSearchResultToLocation(results[sectionIndex].data[index]))
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
