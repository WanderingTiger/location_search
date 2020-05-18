import { TRadiusVM } from './LocationVM'

export interface ILocationFilterVM {
    radii: TRadiusVM[]
    results: ISectionVM[]
}

export interface ISectionVM {
    title: string
    sectionIndex: number
    data: ISearchResultVM[]
}

export interface ISearchResultVM {
    lat: string
    lng: string
    id: number
    name: string
    offset: number
}

const searchResultDefault: ISearchResultVM = {
    lat: '',
    lng: '',
    id: 0,
    name: '',
    offset: 0,
}

const sectionDefault: ISectionVM = {
    title: '',
    sectionIndex: 0,
    data: [],
}

const locationFilterDefault: ILocationFilterVM = {
    radii: [5, 10, 15],
    results: [],
}

export { searchResultDefault, sectionDefault, locationFilterDefault }
