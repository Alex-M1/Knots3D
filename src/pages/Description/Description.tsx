import React from 'react'
import { KnotsDescription, StaticLocalisation } from '../../redux/reducers'
import './Description.scss'

function Description(props: IProps) {
  const { knots, lang, localisation } = props
  return (
    <div className="container">
      <div className="description">
        <div className="description-content">
          <p className="description-about">
            <span>{localisation.description[`name_${lang}`]}</span>
          </p>

        </div>

        <div className="description-animated">

        </div>
      </div>
    </div>
  )
}

export default Description

interface IProps {
  knots: KnotsDescription[]
  lang: string,
  localisation: StaticLocalisation
}