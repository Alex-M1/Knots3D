import React, { SyntheticEvent } from 'react'
import { SetSearchItem } from '../../redux/actions'
import { KnotsDescription, StaticLocalisation } from '../../redux/reducers'
import SearchView from './SearchView'

function Search({ searchInput, localisation, lang, knots, setSearchItem }: IProps) {
  const searchChange = (e: SyntheticEvent<HTMLInputElement>) => {
    let filteredList = knots.filter(item => {
      return item[`knotenname_${lang}`].toLowerCase().search(e.currentTarget.value.toLowerCase()) !== -1;
    })
    setSearchItem(filteredList, e.currentTarget.value)
  }
  const searchProps = { searchInput, localisation, lang, searchChange }

  return < SearchView {...searchProps} />
}

export default Search

interface IProps {
  localisation: StaticLocalisation
  lang: string
  searchInput: string
  knots: KnotsDescription[]
  setSearchItem: (searchItems: KnotsDescription[], input: string) => SetSearchItem
}