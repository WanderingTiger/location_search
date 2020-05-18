import { storiesOf } from '@storybook/react-native'
import React from 'react'
import RadiusItem from './RadiusItem'

storiesOf('screens/location_filter/components/radius_item/RadiusItem', module)
    .add('with data', () => (
        <RadiusItem index={0} data={10} onPress={(index) => console.log('on press:: ', index)} />
    ))
    // @ts-ignore
    .add('without data', () => <RadiusItem />)
