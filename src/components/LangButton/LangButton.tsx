import { IconButton } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './LangButton.scss'

function LangButton(props) {
  const setPath = () => { }

  return (
    <NavLink to='/lang'>
      <IconButton onClick={setPath}>
        <div className='lang-button' />
      </IconButton>
    </NavLink >
  )
}

export default LangButton