import React from 'react'
import { Categories, KnotsDescription, StaticLocalisation } from '../../redux/reducers'
import './Description.scss'
import DescriptionContent from './DescriptionContent'

function Description(props: IProps) {
  console.log(props)
  return (
    <div className="container">
      <div className="description page-content">
        <DescriptionContent {...props} />

        <div className="description-animated">

        </div>
      </div>
    </div>
  )
}

export default Description

interface IProps {
  lang: string,
  localisation: StaticLocalisation
  knot: KnotsDescription
  categories: Categories[]
}