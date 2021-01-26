import React from 'react'
import BackButton from '../components/BackButton/BackButton'
import HeaderTitle from '../components/HeaderTitle/HeaderTitle'
import LangButton from '../components/LangButton/LangButton'
import Share from '../components/Share/Share'
import { SetPath } from '../redux/actions/headerAC'
import { StaticLocalisation } from '../redux/reducers/lang'

const withHeader = (Component: React.ComponentType<any>) => {
  let leftButton: JSX.Element, rightButton: JSX.Element, title: JSX.Element

  const HeaderContainer = ({ path, lang, localisation, setPath }: IProps) => {
    if (path === '/') {
      leftButton = <Share />
      title = <HeaderTitle />
      rightButton = <LangButton setPath={setPath} />
    } else if (path === '/lang') {
      leftButton = <BackButton setPath={setPath} />
      title = <HeaderTitle title={localisation.selectLang[`name_${lang}`]} />
      rightButton = <div></div>
    }

    return <Component
      leftButton={leftButton}
      rightButton={rightButton}
      title={title}
    />
  }
  return HeaderContainer
}

export default withHeader

interface IProps {
  path: string
  localisation: StaticLocalisation
  lang: string
  setPath: (path: string) => SetPath
}