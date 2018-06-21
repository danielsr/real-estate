import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Details } from '../Details/Details'
import { List } from '../List/List'

export const App = () => (
  <div className="layout">
    <Header />
    <div className="main">
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/:id" component={Details} />
      </Switch>
    </div>
    <Footer />
  </div>
)
