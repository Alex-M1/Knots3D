import { setPath } from './../../redux/actions'
import { connect } from "react-redux"
import { compose } from "redux"
import { withHeader } from "../../hoc"
import { AppStateType } from "../../redux/store"
import Header from "./Header"

const mapStateToProps = (state: AppStateType) => ({
  path: state.header.path,
  lang: state.languages.langCode,
  localisation: state.languages.staticLocalisation
})

export default compose(
  connect(mapStateToProps, {
    setPath
  }),
  withHeader
)(Header) as React.ComponentType<any>