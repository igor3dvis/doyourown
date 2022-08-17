import { combineReducers, applyMiddleware, legacy_createStore as createStore} from 'redux'
import { addWordEnReducer } from './addWordEnReducer'
import { wordEnReducer } from './wordsEnReducer'
import { fullInfoEnReducer } from './fullInfoEnReducer'
import thunkMiddleware from 'redux-thunk'

let reducer = combineReducers({ // <--- root_reducer
     addWordEn: addWordEnReducer,
     wordsEn: wordEnReducer,
     fullInfoEn: fullInfoEnReducer
})

type TRootReducer = typeof reducer
export type TState = ReturnType<TRootReducer>

let store = createStore (reducer, applyMiddleware(thunkMiddleware))

export default store
