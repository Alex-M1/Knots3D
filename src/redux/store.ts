import { combineReducers, createStore } from "redux"
import languages from "./reducers/lang"
import main from "./reducers/main"
import header from "./reducers/header"
import search from "./reducers/search"
import description from "./reducers/description"

const reducers = combineReducers({
  header,
  main,
  languages,
  search,
  description
})

const store = createStore(reducers)
export default store

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>