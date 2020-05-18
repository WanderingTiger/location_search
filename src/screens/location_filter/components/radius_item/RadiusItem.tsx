import React from 'react'
import styles from './styles'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { TRadiusVM } from '../../LocationVM'
import imgs from '../../../../assets/imgs/imgs'
import i18n from 'i18n-js'

interface Props {
    index: number
    data: TRadiusVM
    onPress?: (index: number) => void
}
const defaultProps: Props = {
    index: 0,
    data: 5,
}

const RadiusItem: React.FC<Props> = ({ index, data, onPress }: Props) => {
    const handlePress = () => onPress && onPress(index)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.internalContainer}>
                <Image source={imgs.location} style={styles.image} />
                <Text numberOfLines={1} style={styles.km}>
                    {`${data} ${i18n.t('km')} `}
                    <Text numberOfLines={1} style={styles.description}>
                        {`${i18n.t('from you or less')}`}
                    </Text>
                </Text>
            </TouchableOpacity>
            <View style={styles.separator} />
        </View>
    )
}
RadiusItem.defaultProps = defaultProps

export default RadiusItem
