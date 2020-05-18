import React from 'react'
import styles from './styles'
import { Text, TouchableOpacity, View } from 'react-native'
import { ISearchResultVM, searchResultDefault } from '../../LocationFilterVM'

interface Props {
    data: ISearchResultVM
    index: number
    sectionIndex: number
    onPress?: (sectionIndex: number, index: number) => void
}
const defaultProps: Props = {
    data: searchResultDefault,
    index: 0,
    sectionIndex: 0,
}

const ResultItem: React.FC<Props> = ({
    data: { offset, name },
    sectionIndex,
    index,
    onPress,
}: Props) => {
    const handleItemPress = () => onPress && onPress(sectionIndex, index)

    return (
        <TouchableOpacity onPress={handleItemPress} style={styles.container}>
            <View style={styles.internalContainer}>
                <Text numberOfLines={1} style={styles.offset}>
                    {name ? name.slice(0, offset) : ''}
                    <Text numberOfLines={1} style={styles.result}>
                        {name ? name.slice(offset, name.length) : ''}
                    </Text>
                </Text>
            </View>
            {/*<View style={styles.separator} />*/}
        </TouchableOpacity>
    )
}
ResultItem.defaultProps = defaultProps

export default ResultItem
