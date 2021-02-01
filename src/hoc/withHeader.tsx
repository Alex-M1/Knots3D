import React from 'react'
import categories from '../assets/categories'
import { BackButton, HeaderTitle, LangButton, Search, Share } from '../components'
import SearchButton from '../components/SearchButton'
import { SetPath, SetSearch, SetSearchItem } from '../redux/actions'
import { KnotsDescription, StaticLocalisation } from '../redux/reducers'

export const withHeader = (Component: React.ComponentType<any>) => {
  let leftButton: JSX.Element,
    rightButton: JSX.Element,
    title: JSX.Element

  const HeaderContainer = (props: IProps) => {
    const {
      path, lang, localisation, searchInput,
      knots, setPath, setSearchItem, setSearch, isSearch
    } = props
    const searchProps = {
      searchInput, setSearchItem, localisation, knots, lang
    }
    if (path === '/') {
      leftButton = <Share />
      title = <HeaderTitle />
      rightButton = <LangButton setPath={setPath} />
    } else if (path === '/lang') {
      leftButton = <BackButton setPath={setPath} />
      title = <HeaderTitle title={localisation.selectLang[`name_${lang}`]} />
      rightButton = <div></div>
    } else {
      categories.forEach(el => {
        if (path === `/${el.code}`) {
          leftButton = <BackButton setPath={setPath} />
          title = isSearch ? <Search {...searchProps} />
            : <HeaderTitle title={el[`name_${lang}`]} />
          rightButton = <SearchButton isSearch={isSearch} setSearch={setSearch} />
        }
      })
    }

    return <Component
      leftButton={leftButton}
      rightButton={rightButton}
      title={title}
    />
  }
  return HeaderContainer
}

interface IProps {
  path: string
  localisation: StaticLocalisation
  lang: string
  searchInput: string
  knots: KnotsDescription[]
  isSearch: boolean
  setPath: (path: string) => SetPath
  setSearchItem: (searchItems: KnotsDescription[], input: string) => SetSearchItem
  setSearch: (isSearch: boolean) => SetSearch
}