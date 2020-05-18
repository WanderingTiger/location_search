import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../../../../assets/colors'
import getPlatformFont from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle
    title: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        height: 32,
        width: '100%',
        backgroundColor: colors.grey_2,
        paddingHorizontal: 16,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.secondIndex,
    },
    title: {
        ...getPlatformFont('quicksand_regular'),
        fontWeight: '500',
        color: colors.mainBlack,
        fontSize: 16,
    },
})

export default styles
