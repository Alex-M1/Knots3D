import React from 'react'
import { MainGroup, Card } from '../../components'
import { Categories } from '../../redux/reducers'
import './Main.scss'

function Main({ categories, lang }: IProps) {
  const card = (el: Categories, lang: string) => (
    <Card to={el.code} name={el[`name_${lang}`]} img={el.image} key={el.name_eng} amount={el.elems} />
  )
  const collection = categories.map(el => {
    if (el.type_eng === 'Collection') return card(el, lang)
  })
  const category = categories.map(el => {
    if (el.type_eng === 'Category') return card(el, lang)
  })
  const type = categories.map(el => {
    if (el.type_eng === 'Type') return card(el, lang)
  })

  return (
    <div className="page-content">
      <MainGroup category={categories[0][`type_${lang}`]} cards={collection} />
      <MainGroup category={categories[3][`type_${lang}`]} cards={category} />
      <MainGroup category={categories[categories.length - 1][`type_${lang}`]} cards={type} />
    </div>
  )
}

export default Main

interface IProps {
  categories: Categories[],
  lang: string
}