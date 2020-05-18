interface Colors {
    mainBlack: string
    mainPeach: string
    mainGrey: string
    mainGreen: string
    mainBlue: string

    peach_1: string
    peach_2: string

    grey_1: string
    grey_2: string
    grey_3: string
    grey_4: string
    grey_5: string

    firstIndex: string
    secondIndex: string
    thirdIndex: string
    fourthIndex: string
    fifthIndex: string

    blackInactive: string
    card: string

    mainBlackWithOpacity: (opacity: number) => string
    grey_2WithOpacity: (opacity: number) => string
    blackWithOpacity: (opacity: number) => string
    whiteWithOpacity: (opacity: number) => string
}

const colors: Colors = {
    mainBlack: '#495358',
    mainPeach: '#ff867b',
    mainGrey: '#8d929b',
    mainGreen: '#54cd9a',
    mainBlue: '#46c5fb',

    peach_1: '#b29987',
    peach_2: '#fcebe0',

    grey_1: '#edf0f5',
    grey_2: '#f6f3f0',
    grey_3: '#8c9ab2',
    grey_4: '#f3f6f6',
    grey_5: '#d9d5d1',

    firstIndex: '#fedfcb',
    secondIndex: '#e0e8e8',
    thirdIndex: '#ebe4e0',
    fourthIndex: '#d3eaf3',
    fifthIndex: '#dbe8e8',

    blackInactive: '#c4c4c4',
    card: '#f3f6f6',

    mainBlackWithOpacity: (opacity: number) => `rgba(73, 83, 88, ${opacity})`,
    grey_2WithOpacity: (opacity: number) => `rgba(246, 243, 240, ${opacity})`,
    blackWithOpacity: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    whiteWithOpacity: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
}

export { colors }
