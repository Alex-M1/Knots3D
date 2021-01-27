import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "redux"
import { withPath } from "../../hoc"
import { AppStateType } from "../../redux/store"
import Lang from "./Lang"
import { setLang, setPath } from '../../redux/actions'

const mapStateToProps = (state: AppStateType) => ({
  appLang: state.languages.appLang,
  langCode: state.languages.langCode
})



export default compose(
  connect(mapStateToProps, {
    setLang, setPath
  }),
  withPath,
  withRouter
)(Lang) as React.ComponentType<any>