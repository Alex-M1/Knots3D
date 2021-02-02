import React, { useEffect } from 'react'
import { SetPath } from '../redux/actions'



export const withPath = (Component: React.ComponentType<any>) => {
  const WithPath = (props: IProps) => {
    useEffect(() => {
      props.setPath(props.match.path)
    }, [props.match.path])
    return <Component {...props} />
  }
  return WithPath
}

interface IProps {
  match: any
  setPath: (path: string) => SetPath
}