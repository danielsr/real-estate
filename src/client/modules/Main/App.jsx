import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Details } from '../Details/Details'

export const App = () => (
  <div className="layout">
    <Header />
    <Switch>
      <Route path="/:id" component={Details} />
      <Route path="/" component={Details} />
    </Switch>
    <Footer />
  </div>
)
