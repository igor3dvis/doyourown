import { TUsualEn } from "./usualTypes"
import { TWordsEng } from "./wordsEngType"

// wordsEnReducer state
export type TWordsEnState = {
    wordsEn: Array<TWordsEng>
    wordsOnPage: number
    currentPage: number
    isFetching: boolean
    fetchInProcess: boolean
}

// wordsEnReducer state
export type TDescriptEnState = {
    index: number | null
    description: string | null
    usualEn: string | null 
    isShowed: boolean
}

// addWordEnReducer state
export type TAddWordEnState = {
    valuesForm: {}
    isFetching: boolean
    fetchInProcess: boolean
}

