import React from 'react'
import './Card.scss'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'


function Card({ name, img, to }: IProps) {
  return (
    <NavLink to={`/${to}`}>
      <Button className="card-button">
        <div className="card">
          <div className="card-content text-center">
            <img src={img} alt="" className="card-img" />
            <p className="name">
              {name}
            </p>
            <p>130</p>
          </div>
        </div>
      </Button>
    </NavLink>

  )
}

export default Card

interface IProps {
  img: string
  name: string
  to: string
}