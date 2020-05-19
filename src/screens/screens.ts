import { SCREENS_PACKAGE } from '../appConstants'
import { Navigation } from 'react-native-navigation'
import LocationFilterScreen from './location_filter/LocationFilterScreen'
import AppProvider from '../App'

const LOCATION_SCREEN = `${SCREENS_PACKAGE}.LOCATION_SCREEN`

const screens: { id: string; screen: any }[] = [
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

export { registerScreens, LOCATION_SCREEN }
