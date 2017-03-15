import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

const App = () => (
  <div>
    <Header />
    <Route path="/" component={Home} />
    <Route path="/login" component={Home} />
  </div>
)

export default App
