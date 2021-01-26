import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withHeader from '../../hoc/withHeader'
import { setPath } from '../../redux/actions/headerAC'
import { AppStateType } from '../../redux/store'
import './Header.scss'

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {props.leftButton}
          {props.title}
          {props.rightButton}
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  path: state.header.path,
  lang: state.languages.langCode,
  localisation: state.languages.staticLocalisation
})

export default compose(
  connect(mapStateToProps, {
    setPath
  }),
  withHeader
)(Header)