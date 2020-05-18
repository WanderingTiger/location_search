import React from 'react'
import styles from './styles'
import { Text, View } from 'react-native'

interface Props {
    title: string
}
const defaultProps: Props = {
    title: '',
}

const ResultSection: React.FC<Props> = ({ title }: Props) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.title}>
                {title}
            </Text>
        </View>
    )
}
ResultSection.defaultProps = defaultProps

export default ResultSection
