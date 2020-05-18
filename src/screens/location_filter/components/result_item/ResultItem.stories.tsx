import { storiesOf } from '@storybook/react-native'
import React from 'react'
import ResultItem from './ResultItem'

storiesOf('screens/location_filter/components/result_item/ResultItem', module)
    .add('with data', () => (
        <ResultItem
            data={{ name: 'Stockholm', offset: 2, id: 0, lat: '', lng: '' }}
            index={2}
            sectionIndex={1}
            onPress={(sectionIndex, index) => console.log('on press:: ', sectionIndex, ' ', index)}
        />
    ))
    .add('with long data', () => (
        <ResultItem
            data={{
                name: 'Stockholm loooooong loooooong loooooong looooong looong',
                offset: 2,
                id: 0,
                lat: '',
                lng: '',
            }}
            index={2}
            sectionIndex={1}
            onPress={(sectionIndex, index) => console.log('on press:: ', sectionIndex, ' ', index)}
        />
    ))
    // @ts-ignore
    .add('without data', () => <ResultItem />)
