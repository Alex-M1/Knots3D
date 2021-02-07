import { SetPath } from "../actions"
import { SET_PATH } from "../constants"

const initialState: State = {
  path: '/'
}

export default function (state = initialState, action: SetPath): State {
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

interface State {
  path: string | number
}