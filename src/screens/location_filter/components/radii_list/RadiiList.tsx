import React, { ReactElement } from 'react'
import { FlatList } from 'react-native'
import RadiusItem from '../radius_item/RadiusItem'
import { TRadiusVM } from '../../LocationVM'

interface Props {
    data: TRadiusVM[]
    onPress?: (index: number) => void
}
const defaultProps: Props = {
    data: [],
}

const RadiiList: React.FC<Props> = ({ data, onPress }: Props): ReactElement => {
    const renderItem = ({ item, index }: { item: TRadiusVM; index: number }) => (
        <RadiusItem data={item} index={index} onPress={onPress} />
    )
    const keyExtractor = (item: TRadiusVM) => item.toString()
    return (
        <FlatList
            keyboardShouldPersistTaps={'always'}
            data={data}
            renderItem={renderItem}
            maxToRenderPerBatch={3}
            initialNumToRender={3}
            keyExtractor={keyExtractor}
        />
    )
}
RadiiList.defaultProps = defaultProps

export default RadiiList
