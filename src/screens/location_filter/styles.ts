import { StyleSheet, ViewStyle } from 'react-native'
import { colors } from '../../assets/colors'

export interface Style {
    container: ViewStyle
    inputContainer: ViewStyle
    listContainer: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: colors.grey_2,
    },
    listContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
})

export default styles
