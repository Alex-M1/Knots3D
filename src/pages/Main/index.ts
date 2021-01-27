import { withCardData } from './../../hoc/withCardData';
import { connect } from "react-redux"
import { compose } from "redux"
import { AppStateType } from "../../redux/store"
import Main from "./Main"

const mapStateToProps = (state: AppStateType) => ({
  categories: state.mainPage.categories,
  lang: state.languages.langCode
})

export default compose(
  connect(mapStateToProps),
  withCardData
)(Main)