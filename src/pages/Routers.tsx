import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import Lang from './Lang/Lang'
import Main from './Main/Main'

function Routers() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/lang" component={Lang} />
      </Switch>
    </Router>
  )
}

export default Routers