import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Details } from './Details'

export const App = () => (
  <div className="layout">
    <Header />
    <Switch>
      <Route path="/" component={Details} />
    </Switch>
    <Footer />
  </div>
)
