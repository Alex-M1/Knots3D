import { IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SetPath } from '../../redux/actions/headerAC'
import './BackButton.scss'

function BackButton({ to = '/', setPath }: IProps) {
  const [bg, setBg] = useState('-20px -162px')

  const onPressStart = () => setBg('-550px -96px')
  const onPressEnd = () => setBg('-20px -162px')
  const backClick = () => setPath(to)

  return (
    <NavLink to={to}>
      <IconButton
        onMouseDown={onPressStart}
        onMouseUp={onPressEnd}
        onTouchStart={onPressStart}
        onTouchEnd={onPressEnd}
        onClick={backClick}
        href={to}
      >
        <div className="back-button" style={{ backgroundPosition: bg }} />
      </IconButton>
    </NavLink>
  )
}

export default BackButton

interface IProps {
  to?: string
  setPath: (path: string) => SetPath
}