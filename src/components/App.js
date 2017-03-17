import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Header from './header/Header'

const App = () => (
  <div>
    <Header />
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
  </div>
)

export default App
