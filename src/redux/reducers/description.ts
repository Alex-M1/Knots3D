import { SetLike } from './../actions'
import { KnotsDescription } from "."
import { SET_LIKE } from "../constants"

const initialState: State = {
  favoriteKnots: Object.keys(localStorage)
    .map((el) => {
      if (+el < 130) return JSON.parse(localStorage.getItem(el))
    })
    .filter(el => el !== undefined)

}

export default function (state = initialState, action: SetLike): State {
  switch (action.type) {
    case SET_LIKE:
      let favor = []
      Object.keys(localStorage).map((el) => {
        if (+el < 130) return favor.push(JSON.parse(localStorage.getItem(el)))
      })
      return {
        ...state,
        favoriteKnots: favor
      }
    default:
      return state
  }
}

interface State {
  favoriteKnots: KnotsDescription[]
}

