import React from 'react'
import { withRouter } from 'react-router'
import BackButton from '../../components/BackButton/BackButton'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import LangButton from '../../components/LangButton/LangButton'
import Share from '../../components/Share/Share'
import './Header.scss'
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Share />
          {/* <BackButton /> */}
          <HeaderTitle />
          <LangButton />
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header)