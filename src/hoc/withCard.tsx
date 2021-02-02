import React from "react"
import { Card } from "../components"
import { KnotsDescription } from "../redux/reducers"

const withCard = (Component: React.ComponentType<any>) => {
  const setCard = (el: KnotsDescription, lang: string) => {
    const imgPath = './assets/img/listimage/'
    const transformName = (name: string) => name.split('_')[0]
    const otherName = (name: string) => name.split('_').join(', ')
    const name = transformName(el[`knotenname_${lang}`])
    const secondName = otherName(el[`knotenname_${lang}`])
    const re = / /g
    const to = el.knotenname_de.split('_')[0].replace(re, '').toLocaleLowerCase()
    return <Card name={name}
      img={`${imgPath}${el.knotenbild2d}`}
      to={to} key={el.knotenname_eng}
      secondName={secondName}
    />
  }
  return (props: any) => {
    return <Component {...props} setCard={setCard} />
  }
}

export default withCard

