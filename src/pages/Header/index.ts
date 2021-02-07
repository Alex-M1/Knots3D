import { setLike, setPath, setSearch, setSearchItem } from './../../redux/actions'
import { connect } from "react-redux"
import { compose } from "redux"
import { withHeader } from "../../hoc"
import { AppStateType } from "../../redux/store"
import Header from "./Header"

const mapStateToProps = (state: AppStateType) => ({
  path: state.header.path,
  lang: state.languages.langCode,
  localisation: state.languages.staticLocalisation,
  knots: state.main.knotsDescription,
  searchInput: state.search.searchInput,
  isSearch: state.search.isSearch,
  knotType: state.main.knotType,
  favoriteKnots: state.description.favoriteKnots
})

export default compose(
  connect(mapStateToProps, {
    setPath, setSearchItem, setSearch, setLike
  }),
  withHeader
)(Header) as React.ComponentType<any>