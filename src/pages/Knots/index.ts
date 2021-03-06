import { connect } from "react-redux"
import { withRouter } from "react-router"
import { setPath } from './../../redux/actions'
import { compose } from "redux"
import { withCardData, withPath, withCard } from "../../hoc"
import { AppStateType } from "../../redux/store"
import Knots from "./Knots"


const mapStateToProps = (state: AppStateType) => ({
  lang: state.languages.langCode,
  localisation: state.languages.staticLocalisation,
  categories: state.main.categories,
  knots: state.main.knotsDescription,
  searchItems: state.search.search
})



export default compose(
  connect(mapStateToProps, { setPath }),
  withRouter,
  withPath,
  withCard,
  // withCardData,
)(Knots) as React.ComponentType<any>