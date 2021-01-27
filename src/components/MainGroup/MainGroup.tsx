import React from 'react'
import './MainGroup.scss'

function MainGroup({ category, cards }: IProps) {
  return (
    <>
      <div className="cards-group-title">
        <div className="container">
          <h3>{category}</h3>
        </div>
      </div>
      <div className="container">
        <div className="cards-group-content">
          {cards}
        </div>
      </div>
    </>
  )
}

export default MainGroup

interface IProps {
  category: string
  cards: JSX.Element[]
}