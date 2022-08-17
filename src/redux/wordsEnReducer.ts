import { wordsEnApi } from '../api/api'
import { TWordsEnState } from '../typesDeclaration/stateTypes'
import { TWordsEng } from '../typesDeclaration/wordsEngType'

const SET_WORDS_EN = 'wordsEn/SET_WORDS_EN'
const SET_DESCRIPT_EN = 'wordsEn/SET_DESCRIPT_EN'
const TOGGLE_IS_FETCHING = 'wordsEn/TOGGLE_IS_FETCHING'

let initialState: TWordsEnState = {
  wordsEn: [],
  wordsOnPage: 10,
  currentPage: 1,
  isFetching: false,
  fetchInProcess: false,
}

export const wordEnReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_WORDS_EN:
      return { ...state, wordsEn: [...action.words] }

    case SET_DESCRIPT_EN:
      return { ...state, usualEn: action.usual, description: action.description }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.flag }

    default:
      return state
  }
}

//action types
type TSetWords = { type: typeof SET_WORDS_EN, words: Array<TWordsEng> }
type TToggleIsFetching = { type: typeof TOGGLE_IS_FETCHING, flag: boolean }

//action creators
export const setWordsAC = (words: Array<TWordsEng>): TSetWords => ({
  type: SET_WORDS_EN,
  words,
})

export const toggleIsFetching = (flag: boolean): TToggleIsFetching => ({
  type: TOGGLE_IS_FETCHING,
  flag,
})

// thunk creators
export const getWordsTC = (currentPage: number=1, wordsOnPage: number=10) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    const data = await wordsEnApi.requestWords(currentPage, wordsOnPage)
    dispatch(toggleIsFetching(false))
    dispatch(setWordsAC(data))
  }
