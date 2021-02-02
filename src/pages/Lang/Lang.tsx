import React from 'react'
import { RouteComponentProps } from 'react-router'
import LangItem from '../../components/LangItem'
import { SetLang, SetPath } from '../../redux/actions'
import { AppLang } from '../../redux/reducers'

function Lang({ appLang, langCode, setLang, setPath }: IProps & RouteComponentProps) {
  const lang = appLang.map(el => {
    return (
      <LangItem
        langProp={el}
        setLang={setLang}
        setPath={setPath}
        key={el.code}
        isChanged={el.code === langCode ? true : false}
      />)
  })
  return (
    <div className="container">
      <div className="lang f-column page-content">
        {lang}
      </div>
    </div>
  )
}

export default Lang

interface IProps {
  appLang: AppLang
  langCode: string
  setLang: (lang: string) => SetLang
  setPath: (path: string) => SetPath
}