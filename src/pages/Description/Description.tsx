import React from 'react'
import { DescriptionContent, KnotsAnimation } from '../../components'
import { Categories, KnotsDescription, StaticLocalisation } from '../../redux/reducers'
import './Description.scss'


function Description(props: IProps) {
  return (
    <div className="container">
      <div className="description page-content">
        <DescriptionContent {...props} />
        <KnotsAnimation {...props} />
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