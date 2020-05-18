import { ISearchResultVM, ISectionVM } from './LocationFilterVM'
import i18n from 'i18n-js'
import { INearbyResponse, ISearchResponse } from './useLocationFilter'
import { ILocationVM, TRadiusVM } from './LocationVM'

const mapSearchResponseToResults = (input: string, { geonames }: ISearchResponse): ISectionVM => ({
    title: i18n.t('CITY'),
    sectionIndex: 0,
    data: geonames
        ? geonames.map(({ geonameId, lat, lng, name }) => ({
              lat,
              lng,
              id: geonameId,
              name,
              offset: input.length,
          }))
        : [],
})

const mapNearbyResponseToResults = ({ geonames }: INearbyResponse): ISectionVM => ({
    title: i18n.t('NEIGHBORHOOD'),
    sectionIndex: 1,
    data: geonames
        ? geonames.map(({ geonameId, lat, lng, name }) => ({
              lat,
              lng,
              id: geonameId,
              name,
              offset: 0,
          }))
        : [],
})

const isResultsEmpty = (results: ISectionVM[]): boolean => {
    let isEmpty: boolean = false
    results.forEach(({ data }) => {
        if (!data.length) {
            isEmpty = true
        }
    })
    return isEmpty
}

const mapRadiusToLocation = (radius: TRadiusVM): ILocationVM => ({
    radius,
    displayedTitle: `${radius} ${i18n.t('km')}`,
})

const mapSearchResultToLocation = ({ lng, lat, name }: ISearchResultVM): ILocationVM => ({
    lat: Number.parseFloat(lat),
    lng: Number.parseFloat(lng),
    address: name,
    displayedTitle: name,
})

export {
    mapNearbyResponseToResults,
    mapSearchResponseToResults,
    isResultsEmpty,
    mapRadiusToLocation,
    mapSearchResultToLocation,
}
