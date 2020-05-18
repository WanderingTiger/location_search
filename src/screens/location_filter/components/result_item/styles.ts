import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import getPlatformFont from '../../../../assets/fonts/getFontByPlatform'
import { colors } from '../../../../assets/colors'

export interface Style {
    container: ViewStyle
    internalContainer: ViewStyle
    offset: TextStyle
    result: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        height: 51,
        width: '100%',
        backgroundColor: 'white',
    },
    internalContainer: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    offset: {
        ...getPlatformFont('quicksand_regular'),
        color: colors.mainBlack,
        fontSize: 21,
    },
    result: {
        ...getPlatformFont('quicksand_regular'),
        color: colors.mainBlack,
        fontSize: 21,
    },
})

export default styles
