import React, { useMemo } from 'react'
import { match } from 'react-router'
import { MainGroup } from '../../components'
import { KnotsDescription } from '../../redux/reducers'
import './Knots.scss'

function Knots(props: IProps) {
  const { lang, knots, match, searchItems, setCard } = props
  const path: string = match.path.replace(/\//, '')
  console.log(props)
  const card = useMemo(() => {
    if (searchItems !== null && searchItems.length !== 130) {
      return searchItems.map(el => setCard(el, lang))
    }
    return knots.map(el => {
      if (path === 'all') {
        return setCard(el, lang)
      }
      return el.knoten_typ.split('_').map(type => {
        if (type === path) {
          return setCard(el, lang)
        }
      })
    })
  }, [searchItems])


  return (
    <div className="page-content">
      {/* @ts-ignore */}
      <MainGroup cards={card} isMain={false} />
    </div>
  )
}

export default Knots

interface IProps {
  lang: string
  knots: KnotsDescription[]
  match: match
  searchItems: KnotsDescription[]
  setCard: (el: KnotsDescription, lang: string) => JSX.Element
}