import { SET_SEARCH_ITEM } from "../constants"
import { KnotsDescription } from "../reducers"

export const setSearchItem = (searchItems: KnotsDescription, input: string): SetSearchItem => ({
  type: SET_SEARCH_ITEM, searchItems, input
})


export type SetSearchItem = { type: typeof SET_SEARCH_ITEM, searchItems: KnotsDescription, input: string }