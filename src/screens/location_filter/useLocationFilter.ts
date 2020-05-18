import axios, { AxiosInstance } from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import debounce from 'lodash.debounce'
import {
    ILocationFilterVM,
    ISectionVM,
    locationFilterDefault,
    sectionDefault,
} from './LocationFilterVM'
import Geolocation from 'react-native-geolocation-service'
import { mapNearbyResponseToResults, mapSearchResponseToResults } from './mapper'
import i18n from 'i18n-js'
import { Platform } from 'react-native'
import { PERMISSIONS, request } from 'react-native-permissions'

export interface ISearchResponse {
    totalResultsCount: number
    geonames: IGeoname[]
}

export interface INearbyResponse {
    geonames: IGeoname[]
}

export interface IGeoname {
    name: string
    lat: string
    lng: string
    geonameId: number
    countryCode: string
    toponymName: string
    fcl: string
    fcode: string
}

const GEONAMES_URL: string = 'http://api.geonames.org'
const SEARCH_PATH: string = 'searchJSON'
const NEARBY_PATH: string = 'findNearbyPlaceNameJSON'

const USERNAME: string = 'andrii.riseapps'
const STYLE: string = 'short'
const MAX_ROWS: number = 5
const CITIES: string = 'cities15000'

const instance: AxiosInstance = axios.create({
    baseURL: GEONAMES_URL,
    timeout: 8000,
})

let searchDebounced = async (
    input: string,
    locationFilter: ILocationFilterVM,
    setLocationFilter: Dispatch<SetStateAction<ILocationFilterVM>>,
) => {
    // @ts-ignore
    searchDebounced.cancel()
    const data: ISearchResponse = await instance
        .get(SEARCH_PATH, {
            params: {
                name_startsWith: input,
                country: 'us',
                isNameRequired: true,
                searchlang: i18n.currentLocale(),
                style: STYLE,
                maxRows: MAX_ROWS,
                cities: CITIES,
                lang: i18n.currentLocale(),
                username: USERNAME,
            },
        })
        .then(({ data }) => data)
    const results: ISectionVM[] = [...locationFilter.results]
    results[0] = mapSearchResponseToResults(input, data)
    if (!results[1]) {
        results[1] = sectionDefault
    }
    setLocationFilter({ ...locationFilter, results })
}
searchDebounced = debounce(searchDebounced, 200)

function useLocationFilter(
    input: string,
): [ILocationFilterVM, () => Promise<void>, () => Promise<void>] {
    const [locationFilter, setLocationFilter] = useState<ILocationFilterVM>(locationFilterDefault)

    const searchForCities = async () => {
        await searchDebounced(input, locationFilter, setLocationFilter)
    }

    const searchForNearbyCities = async () => {
        Platform.OS === 'android' && (await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION))
        Geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                const nearbyCities: INearbyResponse = await instance
                    .get(NEARBY_PATH, {
                        params: {
                            lat: latitude,
                            lng: longitude,
                            radius: 300,
                            localCountry: 'us',
                            maxRows: MAX_ROWS,
                            style: STYLE,
                            cities: CITIES,
                            lang: i18n.currentLocale(),
                            username: USERNAME,
                        },
                    })
                    .then(({ data }) => data)
                const results: ISectionVM[] = [...locationFilter.results]
                results[1] = mapNearbyResponseToResults(nearbyCities)
                if (!results[0]) {
                    results[0] = sectionDefault
                }
                setLocationFilter({ ...locationFilter, results })
            },
            (error) => {
                console.log(error.message)
            },
        ).catch()
    }

    return [locationFilter, searchForCities, searchForNearbyCities]
}

export { useLocationFilter }
