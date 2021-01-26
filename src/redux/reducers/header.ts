import { SetPath } from "../actions/headerAC"
import { SET_PATH } from "../constants"

const initialState = {
  path: '/'
}

export default function (state = initialState, action: SetPath) {
  switch (action.type) {
    case SET_PATH:
      return {
        ...state,
        path: action.path
      }
    default:
      return state
  }
}