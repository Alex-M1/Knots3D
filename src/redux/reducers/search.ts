import { SearchActions } from './../actions'
import { IS_SEARCH, SET_SEARCH_ITEM } from '../constants'
import { KnotsDescription } from '.'

const initialState: Search = {
  search: null,
  searchInput: '',
  isSearch: false
}

const search = (state = initialState, action: SearchActions): Search => {
  switch (action.type) {
    case SET_SEARCH_ITEM:
      return {
        ...state,
        search: action.searchItems,
        searchInput: action.input
      }
    case IS_SEARCH:
      return {
        ...state,
        isSearch: action.isSearch
      }
    default:
      return state
  }
}
export default search

interface Search {
  search: KnotsDescription[] | null,
  searchInput: string
  isSearch: boolean
}




