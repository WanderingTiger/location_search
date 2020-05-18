import React from 'react'
import styles from './styles'
import imgs from '../../../../assets/imgs/imgs'
import { TextInput, TextInputProps, Image, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../../assets/colors'
import i18n from 'i18n-js'

interface Props {
    onClearPress?: () => void
    textInputProps?: TextInputProps
    clearVisible?: boolean
}
const defaultProps: Props = {
    textInputProps: {},
    clearVisible: true,
}

const Input: React.FC<Props> = ({ textInputProps, onClearPress, clearVisible }: Props) => {
    return (
        <View style={styles.container}>
            <TextInput
                {...textInputProps}
                style={styles.input}
                autoCapitalize={'none'}
                autoCorrect={false}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={colors.mainBlackWithOpacity(0.4)}
                placeholder={i18n.t('Type the city')}
                returnKeyType={'done'}
            />
            {clearVisible ? (
                <TouchableOpacity onPress={onClearPress}>
                    <Image style={styles.delete} source={imgs.delete} />
                </TouchableOpacity>
            ) : null}
        </View>
    )
}
Input.defaultProps = defaultProps

export default Input
