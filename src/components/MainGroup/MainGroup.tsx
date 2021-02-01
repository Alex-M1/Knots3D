import React from 'react'
import './MainGroup.scss'

function MainGroup({ category, cards, isMain = true }: IProps) {
  const type = isMain ?
    <div className="cards-group-title">
      <div className="container">
        <h3>{category}</h3>
      </div>
    </div> : null
  return (
    <>
      {type}
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
  category?: string
  cards: JSX.Element[] | JSX.Element
  isMain?: boolean
}