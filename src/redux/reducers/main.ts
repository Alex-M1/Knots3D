import categories from '../../assets/categories'
import knotsDescription from '../../assets/knotsDescription.json'

const intialState: MainState = {
  knotsDescription,
  categories
}

export default function (state = intialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

interface MainState {
  knotsDescription: KnotsDescription[]
  categories: Categories[]
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


