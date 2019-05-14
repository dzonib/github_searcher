import React from 'react'
import Users from '../page/UserQuery'

import {Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Route exact path="/" component={Users}/>
    </>
  )
}

export default App
