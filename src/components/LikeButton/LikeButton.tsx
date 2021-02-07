import { IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import { KnotsDescription } from '../../redux/reducers'
import './LikeButton.scss'

function LikeButton({ knot, favoriteKnots, setLike }: IProps) {
  const [bg, setBg] = useState('-374px -347px')
  const objToStr = (obj: object) => JSON.stringify(obj)

  const onLikeHandler = () => {

    localStorage.setItem(knot.knotennummer, JSON.stringify(knot))
    setLike()
  }

  // console.log(favoriteKnots)
  console.log(favoriteKnots.includes(knot))
  // console.log(favoriteKnots.find((el) => objToStr(el) === objToStr(knot)))

  // Object.keys(localStorage).forEach(el => {
  //   if (+el < 130) return JSON.parse(localStorage.getItem(el))
  // })

  return (
    <IconButton onClick={onLikeHandler}>
      <div className="like-button button-size" style={{ backgroundPosition: bg }} />
    </IconButton>
  )
}

export default LikeButton

interface IProps {
  knot: KnotsDescription
  favoriteKnots: KnotsDescription[]
  setLike: () => void
}