import { IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './BackButton.scss'

function BackButton({ path = '/' }) {
  const [bg, setBg] = useState('-20px -162px')

  const onPressStart = () => setBg('-550px -96px')
  const onPressEnd = () => setBg('-20px -162px')

  return (
    <IconButton
      onMouseDown={onPressStart}
      onMouseUp={onPressEnd}
      onTouchStart={onPressStart}
      onTouchEnd={onPressEnd}
    >
      <NavLink to={path}>
        <div className="back-button" style={{ backgroundPosition: bg }} />
      </NavLink>
    </IconButton>
  )
}

export default BackButton

