import { SET_PATH } from "../constants";

export const setPath = (path: string): SetPath => ({ type: SET_PATH, path })

export interface SetPath {
  type: typeof SET_PATH
  path: string
}