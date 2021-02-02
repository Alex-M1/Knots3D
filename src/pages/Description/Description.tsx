import React from 'react'
import { Categories, KnotsDescription, StaticLocalisation } from '../../redux/reducers'
import './Description.scss'

function Description(props: IProps) {
  const { knot, lang, localisation, categories } = props
  const warning = (
    knot.knotenwarnung_de ?
      (<p className="description-warning">
        <span>{localisation.attention[`name_${lang}`]}: </span>
        {localisation.attentionText[`name_${lang}`]}
      </p>) : null
  )
  return (
    <div className="container">
      <div className="description page-content">
        <div className="description-content">
          <div className="description-about">
            <span>{localisation.description[`name_${lang}`]}: </span>
            {knot[`knotenbeschreibung_${lang}`]}
          </div>
          <div className="description-abok">
            <span>ABOK: </span>
            {knot.knoten_abok}
          </div>
          {warning}
          <div className="description-also">
            <span>{localisation.alias[`name_${lang}`]}</span>
            <ul>
              {knot[`knotenname_${lang}`].split('_').map((el: string) => {
                return <li key={el}>{el}</li>
              })}
            </ul>
          </div>
          <div className="description-strength">
            <span>{localisation.strength[`name_${lang}`]}: </span>
            {knot.knotenfestigkeit}
          </div>
          <div className="description-category">
            <span>{localisation.category[`name_${lang}`]}</span>
            <ul>
              {knot.knoten_typ.split('_').map(type => {
                return categories.map(ctg => {
                  if (ctg.code === type) {
                    return <li key={ctg.code + type}>{ctg[`name_${lang}`]}</li>
                  }
                })
              })}
            </ul>

          </div>
        </div>

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