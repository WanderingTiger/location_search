import { LOCATION_SCREEN } from './screens'
import { Navigation } from 'react-native-navigation'
import getPlatformFont from '../assets/fonts/getFontByPlatform'
import { ThrottleNavigation } from '../utils/ThrottleNavigation'
import SplashScreenNative from 'react-native-splash-screen'

const setDefaultOptions = (): void => {
    Navigation.setDefaultOptions({
        layout: {
            backgroundColor: 'white',
            componentBackgroundColor: 'white',
            orientation: ['portrait'],
        },
        topBar: {
            visible: true,
            drawBehind: false,
            animate: false,
            title: {
                fontSize: 16,
                color: 'white',
                fontFamily: getPlatformFont('quicksand_bold').fontFamily,
            },
            backButton: {
                visible: false,
                color: 'white',
            },
            background: {
                color: '#434eea',
            },
        },
        statusBar: {
            style: 'light',
        },
    })
}

const setRoot = (): void => {
    ThrottleNavigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: LOCATION_SCREEN,
                        },
                    },
                ],
            },
        },
    })
        .then(() => SplashScreenNative.hide())
        .catch()
}

export { setDefaultOptions, setRoot }
