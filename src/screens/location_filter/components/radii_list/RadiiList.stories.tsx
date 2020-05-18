import { storiesOf } from '@storybook/react-native'
import React from 'react'
import RadiiList from './RadiiList'

storiesOf('screens/location_filter/components/radii_list/RadiiList', module)
    .add('with data', () => (
        <RadiiList data={[5, 10, 15]} onPress={(index) => console.log('on press:: ', index)} />
    ))
    // @ts-ignore
    .add('without data', () => <RadiiList />)
