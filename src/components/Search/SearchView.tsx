import React, { SyntheticEvent } from 'react'
import { StaticLocalisation } from '../../redux/reducers'

function SearchView({ searchChange, searchInput, localisation, lang }: IProps) {
  return (
    <form>
      <input
        type="text"
        onChange={searchChange}
        value={searchInput}
        placeholder={localisation.search[`name_${lang}`]}
        className="search-input"
      />
    </form>
  )
}

export default SearchView

interface IProps {
  searchInput: string
  localisation: StaticLocalisation
  lang: string
  searchChange: (e: SyntheticEvent<HTMLInputElement>) => void
}