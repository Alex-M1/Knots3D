import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
import MainGroup from '../../components/MainGroup/MainGroup'
import { Categories } from '../../redux/reducers/mainPage'
import { AppStateType } from '../../redux/store'
import './Main.scss'

function Main({ categories, lang }: IProps) {
  const collection = categories.map(el => {
    if (el.type_eng === 'Collection') return <Card name={el[`name_${lang}`]} img={el.image} key={el.name_eng} />
  })
  const category = categories.map(el => {
    if (el.type_eng === 'Category') return <Card name={el[`name_${lang}`]} img={el.image} key={el.name_eng} />
  })
  const type = categories.map(el => {
    if (el.type_eng === 'Type') return <Card name={el[`name_${lang}`]} img={el.image} key={el.name_eng} />
  })

  return (
    <div>
      <MainGroup category={categories[0][`type_${lang}`]} cards={collection} />
      <MainGroup category={categories[3][`type_${lang}`]} cards={category} />
      <MainGroup category={categories[categories.length - 1][`type_${lang}`]} cards={type} />
    </div>

  )
}

const mapStateToProps = (state: AppStateType) => ({
  categories: state.mainPage.categories,
  lang: state.languages.langCode
})

export default connect(mapStateToProps)(Main)

interface IProps {
  categories: Categories[],
  lang: string
}