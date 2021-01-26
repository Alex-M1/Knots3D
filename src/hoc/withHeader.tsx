import React from 'react'

function withHeader(Component: React.ComponentType<any>) {

  return <Component
    leftButton={''}
    rightButton={''}
    title={''}
  />
}

export default withHeader

