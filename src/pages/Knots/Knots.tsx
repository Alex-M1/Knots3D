import React from 'react'
import { match } from 'react-router'
import Card from '../../components/Card'
import MainGroup from '../../components/MainGroup'
import { Categories, KnotsDescription, StaticLocalisation } from '../../redux/reducers'
import './Knots.scss'

function Knots(props: IProps) {
  const { lang, localisation, knots, categories, match } = props
  const path: string = match.path.replace(/\//, '')
  const imgPath = './assets/img/listimage/'
  const transformName = (name: string) => name.split('_')[0]
  //@ts-ignore
  const card: JSX.Element[] = knots.map(el => {
    if (path === 'all') {
      const name = transformName(el[`knotenname_${lang}`])
      return <Card name={name} img={`${imgPath}${el.knotenbild2d}`} to={'/'} />
    }
    return el.knoten_typ.split('_').map(type => {
      if (type === path) {
        const name = transformName(el[`knotenname_${lang}`])
        return <Card name={name} img={`${imgPath}${el.knotenbild2d}`} to={'/'} />
      }
    })
  })

  return <MainGroup cards={card} isMain={false} />


}

export default Knots

interface IProps {
  lang: string
  localisation: StaticLocalisation
  categories: Categories
  knots: KnotsDescription
  match: match
}