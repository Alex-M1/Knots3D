import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Categories } from '../redux/reducers'
import { AppStateType } from '../redux/store'
import Header from './Header'
import Knots from './Knots'
import Lang from './Lang'
import Main from './Main'

function Routers(props: IProps) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/lang" component={Lang} />
        {props.categories.map(el => <Route path={`/${el.code}`} key={el.name_eng} component={Knots} />)}
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  categories: state.mainPage.categories
})
export default connect(mapStateToProps)(Routers)

interface IProps {
  categories: Categories[]
}