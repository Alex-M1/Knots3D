import React from 'react'
import { KnotsDescription } from '../../redux/reducers'
import './KnotsAnimation.scss'
import { useSprite } from 'react-sprite-animator'

function KnotsAnimation({ knot }: IProps) {
  const {
    knoren_frameweite,
    knoten_framehoehe,
    knotenbild2d, knoten_frame_2d, knoten_count_x_2d
  } = knot
  const style = useSprite({
    width: knoren_frameweite,
    height: knoten_framehoehe,
    sprite: `/assets/img/images/${knotenbild2d}`,
    direction: 'horizontal',
    shouldAnimate: true,
    startFrame: 0,
    fps: 15,
    // fps: Math.ceil(25 / 100),
    frameCount: knoten_frame_2d,
    wrapAfter: knoten_count_x_2d,
    // scale: scaleSprite,
  })

  return (
    <div className="description-animated">
      <div style={style}></div>
    </div>
  )
}

export default KnotsAnimation

interface IProps {
  knot: KnotsDescription
}