import React from 'react'
import { SafeAreaView } from 'react-native'
import baseStyles from './components/baseStyles'

export interface Props {}

const AppProvider = <P extends Props>(Component: React.ComponentType<P>) => (props: Props) => (
    <SafeAreaView style={baseStyles.container}>
        <Component {...(props as P)} />
    </SafeAreaView>
)

export default AppProvider
