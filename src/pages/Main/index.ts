import { connect } from "react-redux"
import { AppStateType } from "../../redux/store"
import Main from "./Main"

const mapStateToProps = (state: AppStateType) => ({
  categories: state.mainPage.categories,
  lang: state.languages.langCode
})

export default connect(mapStateToProps)(Main)