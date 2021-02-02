import { AppStateType } from '../../redux/store'
import { connect } from 'react-redux'
import Description from './Description'

const mapStateToProps = (state: AppStateType) => ({
  lang: state.languages.langCode,
  localisation: state.languages.staticLocalisation,
  categories: state.main.categories
})

export default connect(mapStateToProps)(Description)