import { setType } from './../../redux/actions/main'
import { withCardData } from './../../hoc'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../redux/store'
import Main from './Main'

const mapStateToProps = (state: AppStateType) => ({
  categories: state.main.categories,
  lang: state.languages.langCode
})

export default compose(
  connect(mapStateToProps, { setType }),
  withCardData
)(Main) as React.ComponentType<any>