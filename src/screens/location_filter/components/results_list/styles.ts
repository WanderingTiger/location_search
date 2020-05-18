import { StyleSheet, ViewStyle } from 'react-native'
import { colors } from '../../../../assets/colors'

export interface Style {
    container: ViewStyle
    separator: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
    },
    separator: {
        height: 1,
        width: '100%',
        marginStart: 12,
        backgroundColor: colors.secondIndex,
    },
})

export default styles
