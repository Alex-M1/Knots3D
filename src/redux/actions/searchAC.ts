import { IS_SEARCH, SET_SEARCH_ITEM } from "../constants"
import { KnotsDescription } from "../reducers"

export const setSearchItem = (searchItems: KnotsDescription[], input: string): SetSearchItem => ({
  type: SET_SEARCH_ITEM, searchItems, input
})
export const setSearch = (isSearch: boolean): SetSearch => ({
  type: IS_SEARCH, isSearch
})

export type SearchActions = SetSearch | SetSearchItem
export type SetSearch = { type: typeof IS_SEARCH, isSearch: boolean }
export type SetSearchItem = { type: typeof SET_SEARCH_ITEM, searchItems: KnotsDescription[], input: string }