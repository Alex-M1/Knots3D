import { AppStateType } from '../../redux/store'
import { connect } from 'react-redux'
import Description from './Description'

const mapStateToProps = (state: AppStateType) => ({
  knots: state.main.knotsDescription,
  lang: state.languages.langCode,
  localisation: state.languages.staticLocalisation
})

export default connect(mapStateToProps)(Description)