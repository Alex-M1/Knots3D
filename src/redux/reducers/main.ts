import categories from '../../assets/categories'
import knotsDescription from '../../assets/knotsDescription.json'
import { SetType } from '../actions'
import { SET_TYPE } from '../constants'

const intialState: MainState = {
  knotsDescription,
  categories,
  knotType: '/'
}

export default function (state = intialState, action: SetType) {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        knotType: action.knotType
      }
    default:
      return state
  }
}

interface MainState {
  knotsDescription: KnotsDescription[]
  categories: Categories[],
  knotType: string
}

export type KnotsDescription = typeof knotsDescription[0]
export interface Categories {
  code: string
  type_eng: string
  type_de: string
  type_esp: string
  type_ru: string
  type_fr: string
  type_it: string
  type_tuek: string
  name_eng: string
  name_de: string
  name_esp: string
  name_ru: string
  name_fr: string
  name_it: string
  name_tuek: string
  image: string
  elems: number
}


