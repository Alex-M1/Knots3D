import { SetLang } from './../actions'
import appLang from '../../assets/languages.json'
import clientLang from '../../assets/clientLang'
import { SET_LANGUAGE } from '../constants'
import staticLocalisation from '../../assets/staticLocalisation.json'


const initialState: Lang = {
  appLang,
  langCode: clientLang,
  staticLocalisation
}

const languages = (state = initialState, action: SetLang) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        langCode: action.lang
      }
    default:
      return state
  }
}
export default languages

interface Lang {
  appLang: AppLang
  langCode: string
  staticLocalisation: StaticLocalisation
}

export type AppLang = typeof appLang
export type StaticLocalisation = typeof staticLocalisation
