import { withCardData } from './../../hoc/withCardData';
import { setPath } from './../../redux/actions'
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "redux"
import { withPath } from "../../hoc"
import { AppStateType } from "../../redux/store"
import Knots from "./Knots"

const mapStateToProps = (state: AppStateType) => ({
  lang: state.languages.langCode,
  localisation: state.languages.staticLocalisation,
  categories: state.mainPage.categories,
  knots: state.mainPage.knotsDescription
})



export default compose(
  connect(mapStateToProps, { setPath }),
  withPath,
  withCardData,
  withRouter
)(Knots) as React.ComponentType<any>