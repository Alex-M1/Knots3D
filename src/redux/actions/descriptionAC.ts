import { SET_LIKE } from "../constants"

export const setLike = (): SetLike => ({ type: SET_LIKE })

export type SetLike = { type: typeof SET_LIKE }