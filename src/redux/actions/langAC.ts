import { SET_LANGUAGE } from "../constants"

export const setLang = (lang: string): SetLang => ({ type: SET_LANGUAGE, lang })

export type SetLang = { type: typeof SET_LANGUAGE, lang: string }