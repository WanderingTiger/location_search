export interface ILocationVM {
    lat?: number
    lng?: number
    address?: string
    radius?: TRadiusVM
    displayedTitle?: string
}

export type TRadiusVM = 5 | 10 | 15

export const locationDefault: ILocationVM = {
    lat: 0,
    lng: 0,
    address: '',
    radius: 5,
    displayedTitle: '',
}

export const locationMock: ILocationVM = {
    lat: 40.73061,
    lng: -73.935242,
    address: 'Stockholm',
    radius: 5,
    displayedTitle: 'Stockholm',
}
