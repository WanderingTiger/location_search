import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native'
import { colors } from '../../../../assets/colors'
import getPlatformFont from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle
    internalContainer: ViewStyle
    separator: ViewStyle
    km: TextStyle
    description: TextStyle
    image: ImageStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        height: 51,
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 16,
    },
    internalContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    separator: {
        marginStart: 12,
        width: '100%',
        height: 1,
        backgroundColor: colors.grey_5,
    },
    km: {
        ...getPlatformFont('quicksand_regular'),
        color: colors.mainBlack,
        fontSize: 21,
        marginStart: 12,
        flex: 1,
    },
    description: {
        ...getPlatformFont('quicksand_regular'),
        color: colors.mainBlack,
        fontSize: 21,
        flex: 1,
    },
    image: {
        width: 15,
        height: 20,
        marginLeft: -5,
        marginRight: 5,
    },
})

export default styles
