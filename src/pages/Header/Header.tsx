import React from 'react'
import './Header.scss'

function Header(props: IProps) {
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

interface IProps {
  leftButton: JSX.Element
  title: JSX.Element
  rightButton: JSX.Element
}