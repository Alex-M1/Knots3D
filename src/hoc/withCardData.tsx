import React from 'react'
import { match } from 'react-router'
import { Categories } from '../redux/reducers'

export const withCardData = (Component: React.ComponentType<any>) => {
  const CardData = (props: IProps) => {
    const { categories, match } = props
    if (match.path === '/') {
      categories.forEach(el => {

      })
    } else {

    }
    return <Component {...props} />
  }
  return CardData
}

interface IProps {
  match: match
  categories: Categories[]
}