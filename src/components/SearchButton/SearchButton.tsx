import { IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import { SetSearch } from '../../redux/actions'

function SearchButton({ isSearch, setSearch }: IProps) {
  const [bg, setBg] = useState('-21px -515px')

  const onPressStart = () => setBg('-557px -435px')
  const onPressEnd = () => setBg('-21px -515px')
  const onSearchClick = () => setSearch(!isSearch)
  return (
    <IconButton
      onMouseDown={onPressStart}
      onMouseUp={onPressEnd}
      onTouchStart={onPressStart}
      onTouchEnd={onPressEnd}
      onClick={onSearchClick}
    >
      <div className="search-button" style={{ backgroundPosition: bg }} />
    </IconButton>
  )
}

export default SearchButton

interface IProps {
  isSearch: boolean
  setSearch: (isSearch: boolean) => SetSearch
}