import React from 'react'
import './Card.scss'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { SetType } from '../../redux/actions'


function Card({ name, img, to, amount, secondName, setType }: IProps) {
  const knotType = () => {
    try {
      setType(to)
    } catch { }
  }
  return (
    <NavLink to={`/${to}`} onClick={knotType}>
      <Button className="card-button">
        <div className="card">
          <div className="card-content text-center">
            <img src={img} alt="" className="card-img" />
            <div className="name">
              {name}
              <p className="second-name">{secondName}</p>
            </div>
            <p>{amount}</p>
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
  amount?: number
  secondName?: string
  setType?: (knotType: string) => SetType
}