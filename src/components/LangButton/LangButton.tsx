import { IconButton } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './LangButton.scss'

function LangButton(props) {
  const setPath = () => { }

  return (
    <NavLink to='/lang'>
      <IconButton onClick={setPath} className="lang-icon-button">
        <div className='lang-button button-size' />
      </IconButton>
    </NavLink >
  )
}

export default LangButton