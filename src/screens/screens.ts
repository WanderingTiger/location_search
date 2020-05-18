import { SCREENS_PACKAGE } from '../appConstants'
import { Navigation } from 'react-native-navigation'
import { getStorybookUI } from '@storybook/react-native'
import LocationFilterScreen from './location_filter/LocationFilterScreen'
import AppProvider from '../App'

const STORYBOOK = `${SCREENS_PACKAGE}.STORYBOOK`
const LOCATION_SCREEN = `${SCREENS_PACKAGE}.LOCATION_SCREEN`

const screens: { id: string; screen: any }[] = [
    {
        id: STORYBOOK,
        screen: getStorybookUI({
            asyncStorage: require('@react-native-community/async-storage').default,
        }),
    },
    {
        id: LOCATION_SCREEN,
        screen: LocationFilterScreen,
    },
]

const registerScreens = (): void => {
    screens.forEach(({ id, screen }) =>
        Navigation.registerComponent(
            id,
            () => AppProvider(screen),
            () => screen,
        ),
    )
}

export { registerScreens, STORYBOOK, LOCATION_SCREEN }
