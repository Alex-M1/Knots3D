import React from 'react'
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