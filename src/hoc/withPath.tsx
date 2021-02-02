import React, { useEffect } from 'react'
import { SetPath } from '../redux/actions'



export const withPath = (Component: React.ComponentType<any>) => {
  const WithPath = (props: IProps) => {
    useEffect(() => {
      if (props.match.params.id) props.setPath(+props.match.params.id)
      else props.setPath(props.match.url)
    }, [props.match.path])
    return <Component {...props} />
  }
  return WithPath
}

interface IProps {
  match: any
  setPath: (path: string | number) => SetPath
}