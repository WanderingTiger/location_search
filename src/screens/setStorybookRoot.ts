import { configure } from '@storybook/react-native'
import { registerScreens, STORYBOOK } from './screens'
import SplashScreenNative from 'react-native-splash-screen'
import { ThrottleNavigation } from '../utils/ThrottleNavigation'

const registerStories = () => {
    configure(() => {
        require('./location_filter/components/input/Input.stories')
    }, module)
}

const setStorybookRoot = (): void => {
    registerScreens()
    registerStories()
    ThrottleNavigation.setRoot({
        root: {
            component: {
                name: STORYBOOK,
            },
        },
    })
        .then(() => SplashScreenNative.hide())
        .catch()
}

export { setStorybookRoot }
