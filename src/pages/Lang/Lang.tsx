import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { compose } from 'redux'
import LangItem from '../../components/LangItem/LangItem'
import withPath from '../../hoc/withPath'
import { SetPath, setPath } from '../../redux/actions/headerAC'
import { SetLang, setLang } from '../../redux/actions/langAC'
import { AppLang } from '../../redux/reducers/lang'
import { AppStateType } from '../../redux/store'

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
      <div className="lang f-column">
        {lang}
      </div>
    </div>
  )
}



const mapStateToProps = (state: AppStateType) => ({
  appLang: state.languages.appLang,
  langCode: state.languages.langCode
})



export default compose(
  connect(mapStateToProps, {
    setLang, setPath
  }),
  withPath,
  withRouter
)(Lang)

interface IProps {
  appLang: AppLang
  langCode: string
  setLang: (lang: string) => SetLang
  setPath: (path: string) => SetPath
}