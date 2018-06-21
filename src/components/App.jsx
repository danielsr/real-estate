import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { House } from './House'

export const App = () => (
  <div className="layout">
    <Header />
    <Switch>
      <Route path="/:id" component={House} />
      <Route path="/" component={House} />
    </Switch>
    <Footer />
  </div>
)
