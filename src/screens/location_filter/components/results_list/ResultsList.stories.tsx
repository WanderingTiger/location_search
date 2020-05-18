import { storiesOf } from '@storybook/react-native'
import React from 'react'
import ResultsList from './ResultsList'

storiesOf('screens/location_filter/components/results_list/ResultsList', module)
    .add('with data', () => (
        <ResultsList
            data={[
                {
                    title: 'CITY',
                    sectionIndex: 0,
                    data: [
                        { id: 0, name: 'Stockholm', offset: 2, lat: '', lng: '' },
                        { id: 1, name: 'Strängnäs', offset: 2, lat: '', lng: '' },
                        { id: 2, name: 'Strömstad', offset: 2, lat: '', lng: '' },
                    ],
                },
                {
                    title: 'NEIGHBORHOOD',
                    sectionIndex: 1,
                    data: [
                        { id: 0, name: 'Stureby, Stockholm', offset: 0, lat: '', lng: '' },
                        { id: 1, name: 'Stampen, Gothenburg', offset: 0, lat: '', lng: '' },
                    ],
                },
            ]}
            onPress={(sectionIndex, index) => console.log('on press:: ', sectionIndex, ' ', index)}
        />
    ))
    // @ts-ignore
    .add('without data', () => <ResultsList />)
