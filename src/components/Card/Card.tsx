import React from 'react'
import './Card.scss'
import { Button } from '@material-ui/core'

function Card({ name, img }) {
  return (
    <Button className="card-button">
      <div className="card">
        <div className="card-content text-center">
          <img src={img} alt="" className="card-img" />

          <p className="name">
            {name}
          </p>
          <p>
            130
        </p>

        </div>
      </div>
    </Button>
  )
}

export default Card