import React from 'react'
import { RouteComponentProps } from 'react-router';
import { SetPath, setPath } from '../redux/actions/headerAC';

const withPath = (Component: React.ComponentType<any>) => {

  const WithPath = (props: any) => {
    props.setPath(props.match.path)
    return <Component {...props} />
  }
  return WithPath
}

export default withPath

interface IProps {
  setPath: (path: string) => SetPath
}