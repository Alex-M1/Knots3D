import React from 'react'
import './HeaderTitle.scss'

function HeaderTitle({ title = "Knots 3D" }) {
  return (
    <h1 className='header-title'>
      {title}
    </h1>
  )
}

export default HeaderTitle