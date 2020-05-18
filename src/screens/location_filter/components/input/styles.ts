import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native'
import { colors } from '../../../../assets/colors'
import getPlatformFont from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle
    input: TextStyle
    delete: ImageStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        height: 48,
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.secondIndex,
        alignItems: 'center',
        paddingStart: 5,
        paddingEnd: 14,
    },
    input: {
        ...getPlatformFont('quicksand_regular'),
        fontWeight: '500',
        fontSize: 24,
        marginHorizontal: 21,
        color: colors.mainBlack,
        flex: 1,
    },
    delete: {
        width: 20,
        height: 20,
    },
})

export default styles
