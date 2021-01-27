import React from 'react'
import { connect } from 'react-redux'
import { match, withRouter } from 'react-router'
import { compose } from 'redux'
import { withPath } from '../../hoc'
import { Categories, KnotsDescription, StaticLocalisation } from '../../redux/reducers'
import { setPath } from '../../redux/actions'
import { AppStateType } from '../../redux/store'
import './Knots.scss'

function Knots(props: IProps) {
  const { lang, localisation, knots, categories, match } = props

  return (
    <div>

    </div>
  )
}

export default Knots

interface IProps {
  lang: string
  localisation: StaticLocalisation
  categories: Categories
  knots: KnotsDescription
  match: match
}