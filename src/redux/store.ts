import { combineReducers, createStore } from "redux"
import languages from "./reducers/lang"
import mainPage from "./reducers/mainPage"

const reducers = combineReducers({
  mainPage,
  languages
})

const store = createStore(reducers)
export default store

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>