import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import withPath from '../../hoc/withPath'
import { AppStateType } from '../../redux/store'
import './Knots.scss'

function Knots(props) {
  return (
    <div>

    </div>
  )
}



const mapStateToProps = (state: AppStateType) => ({

})

export default compose(
  connect(mapStateToProps),
  withPath,
  withRouter
)(Knots)