import { wordsEnApi } from '../api/api'
import { toggleIsFetching } from './wordsEnReducer'
import { TDescriptEnState } from '../typesDeclaration/stateTypes'

const SET_INDEX = 'descriptEn/SET_INDEX'
const SET_DESCRIPT_EN = 'descriptEn/SET_DESCRIPT_EN'
const SET_IS_SHOWED = 'descriptEn/SET_IS_SHOWED'

let initialState: TDescriptEnState = {
  index: null,
  description: '',
  usualEn: '',
  isShowed: false,  
}

export const fullInfoEnReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INDEX:
      return { ...state, index: action.index }

    case SET_DESCRIPT_EN:
      return { ...state, usualEn: action.usual, description: action.description }

    case SET_IS_SHOWED:
      return { ...state, isShowed: action.flag }

    default:
      return state
  }
}

//action types
type TSetIndex = { type: typeof SET_INDEX, index: number }
type TSetDescript = { type: typeof SET_DESCRIPT_EN, usual: string, description: string }
type TSetIsShowed = { type: typeof SET_IS_SHOWED, flag: boolean }

//action creators
export const setIndexAC = (index: number): TSetIndex => ({
  type: SET_INDEX, index
})

export const setDescriptAC = (usual: string, description: string): TSetDescript => ({
  type: SET_DESCRIPT_EN, usual, description
})

export const setIsShowedAC = (flag: boolean): TSetIsShowed => ({ 
    type: SET_IS_SHOWED, flag 
})

// thunk creators
export const getDescriptEnTC = (id: string) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true))
  const data = await wordsEnApi.requestDescript(id)
  dispatch(toggleIsFetching(false))
  dispatch(setDescriptAC(data.usualCase, data.description))
  dispatch(setIsShowedAC(true))
}
