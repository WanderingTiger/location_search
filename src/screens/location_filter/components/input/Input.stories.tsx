import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Input from './Input'

storiesOf('screens/location_filter/components/input/Input', module)
    .add('with value', () => (
        <Input
            textInputProps={{ value: 'Kharkiv' }}
            onBackPress={() => console.log('on back press::')}
            onClearPress={() => console.log('on clear press::')}
        />
    ))
    .add('without value', () => (
        <Input
            onBackPress={() => console.log('on back press::')}
            onClearPress={() => console.log('on clear press::')}
        />
    ))
    .add('without data', () => <Input />)
