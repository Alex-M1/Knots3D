import { SET_PATH } from "../constants"

export const setPath = (path: string | number): SetPath => ({ type: SET_PATH, path })

export interface SetPath {
  type: typeof SET_PATH
  path: string | number
}