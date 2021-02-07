import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Categories, KnotsDescription } from '../redux/reducers'
import { AppStateType } from '../redux/store'
import Description from './Description'
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
        {props.knots.map(el => {
          const re = / /g
          const to = el.knotenname_de.split('_')[0].replace(re, '').toLocaleLowerCase()
          return (
            < Route path={`/${to}/:id`} key={to} >
              <Description knot={el} />
            </Route>)
        })}
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  categories: state.main.categories,
  knots: state.main.knotsDescription
})
export default connect(mapStateToProps)(Routers)

interface IProps {
  categories: Categories[]
  knots: KnotsDescription[]
}