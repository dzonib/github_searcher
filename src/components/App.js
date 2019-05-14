import React from 'react'
import Users from '../page/UserQuery'

import {Route} from 'react-router-dom'
import GlobalStyle from '../styles/global'
import Header from './Header'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Route exact path="/" component={Users}/>
      <Route exact path="/user/:id" />
    </>
  )
}

export default App
