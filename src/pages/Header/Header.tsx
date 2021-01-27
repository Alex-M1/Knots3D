import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withHeader } from '../../hoc'
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

export default Header