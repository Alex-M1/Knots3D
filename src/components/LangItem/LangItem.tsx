import { Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SetLang } from '../../redux/actions/langAC'
import './LangItem.scss'

function LangItem({ langProp, isChanged = false, setLang }: IProps) {
  const onLangChange = () => {
    setLang(langProp.code)
  }
  const changeLang = isChanged ? '#699bc9' : 'inherit'
  return (
    <div className="lang-item" style={{ background: changeLang }}>
      <NavLink to="/">
        <Button onClick={onLangChange}>
          {langProp.name}
        </Button>
      </NavLink>
    </div>
  )
}

export default LangItem

interface IProps {
  langProp: {
    code: string
    name: string
  }
  isChanged?: boolean
  setLang: (lang: string) => SetLang
}