import { SET_TYPE } from "../constants"

export const setType = (knotType: string): SetType => ({ type: SET_TYPE, knotType })
export type SetType = { type: typeof SET_TYPE, knotType: string }