import React from 'react'
import { Provider } from 'react-redux'
import Routers from './pages/Routers'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  )
}

export default App