import { SetSearchItem } from './../actions'
import { SET_SEARCH_ITEM } from '../constants'
import { KnotsDescription } from '.'

const initialState: Search = {
  search: null,
  searchInput: ''
}

const search = (state = initialState, action: SetSearchItem) => {
  switch (action.type) {
    case SET_SEARCH_ITEM:
      return {
        ...state,
        search: action.searchItems,
        searchInput: action.input
      }
    default:
      return state
  }
}
export default search

interface Search {
  search: KnotsDescription | null,
  searchInput: string
}




