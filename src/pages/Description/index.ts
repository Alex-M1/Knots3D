import { compose } from 'redux'
import { AppStateType } from '../../redux/store'
import { connect } from 'react-redux'
import Description from './Description'
import { withRouter } from 'react-router'
import { withPath } from '../../hoc'
import { setPath } from '../../redux/actions'

const mapStateToProps = (state: AppStateType) => ({
  lang: state.languages.langCode,
  localisation: state.languages.staticLocalisation,
  categories: state.main.categories
})

export default compose(
  connect(mapStateToProps, { setPath }),
  withRouter,
  withPath,

)(Description)