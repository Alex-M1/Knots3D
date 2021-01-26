import { IconButton } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './LangButton.scss'

function LangButton(props) {
  return (
    <IconButton>
      <NavLink to='/lang'>
        <div className='lang-button' />
      </NavLink>
    </IconButton>
  );
}

export default LangButton;