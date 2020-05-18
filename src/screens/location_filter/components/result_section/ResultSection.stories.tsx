import { storiesOf } from '@storybook/react-native'
import React from 'react'
import ResultSection from './ResultSection'

storiesOf('screens/location_filter/components/result_section/ResultSection', module)
    .add('with data', () => <ResultSection title={'CITY'} />)
    .add('with long data', () => (
        <ResultSection title={'CITY loooooong looooooong loooooong looong looooooooooooong'} />
    ))
    // @ts-ignore
    .add('without data', () => <ResultSection />)
