/* 
/   this addWordEnReduser is for 
/   - adding new word to database
/   - editing word and change it in database
*/

import { wordsEnApi } from '../api/api'
import { TAddWordEnState } from '../typesDeclaration/stateTypes'
import { TUsualEn } from '../typesDeclaration/usualTypes'
import { TWordsEng } from '../typesDeclaration/wordsEngType'

const ADD_NEW_WORD_EN = 'addWordEn/ADD_NEW_WORD_EN'
const ADD_DESCRIPTION_EN = 'addWordEn/ADD_DESCRIPTION_EN'
const TOGGLE_IS_FETCHING = 'addWordEn/TOGGLE_IS_FETCHING'

let initialState: TAddWordEnState = {
  valuesForm: [],
  isFetching: false,
  fetchInProcess: false,
};

export const addWordEnReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NEW_WORD_EN:
      return { ...state, valuesForm: action.values }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.flag }

    default:
      return state
  }
};

//action types
type TToggleIsFetching = { type: typeof TOGGLE_IS_FETCHING; flag: boolean }
type TAddNewWordEn = { type: typeof ADD_NEW_WORD_EN; values: {} }
type TAddDescriptionEn = { type: typeof ADD_DESCRIPTION_EN; values: {} }

//action creators
export const toggleIsFetchingAC = (flag: boolean): TToggleIsFetching => ({
  type: TOGGLE_IS_FETCHING, flag })

export const addNewWordEnAC = ( type: typeof ADD_NEW_WORD_EN, values: TWordsEng): TAddNewWordEn => ({
  type: ADD_NEW_WORD_EN, values })

export const addDescriptionEnAC = ( type: typeof ADD_DESCRIPTION_EN, values: TUsualEn): TAddDescriptionEn => ({
  type: ADD_DESCRIPTION_EN, values })

// thunk creators
export const addNewWordEnTC = (values: TWordsEng, descript: TUsualEn) => async (dispatch: any) => {
    console.log("ADD_NEW_WORD_EN_TC")

    dispatch(toggleIsFetchingAC(true))
     await wordsEnApi.sendNewWordBaseInfo(values)
     await wordsEnApi.sendNewWordDescription(descript)
    dispatch(toggleIsFetchingAC(false))

    //console.log(data)
    
  }