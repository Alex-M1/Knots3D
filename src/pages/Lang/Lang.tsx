import React from 'react'
import { connect } from 'react-redux'
import LangItem from '../../components/LangItem/LangItem'
import { SetLang, setLang } from '../../redux/actions/langAC'
import { AppLang } from '../../redux/reducers/lang'
import { AppStateType } from '../../redux/store'

function Lang({ appLang, langCode, setLang }: IProps) {
  const lang = appLang.map(el => {
    if (el.code === langCode) return <LangItem langProp={el} setLang={setLang} key={el.code} isChanged={true} />
    return <LangItem langProp={el} setLang={setLang} key={el.code} />
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


export default connect(mapStateToProps, {
  setLang
})(Lang)

interface IProps {
  appLang: AppLang
  langCode: string
  setLang: (lang: string) => SetLang
}