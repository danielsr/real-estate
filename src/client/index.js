import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './modules/Main/App'

const AppClient = () => (
  <Router>
    <App />
  </Router>
)
/* eslint no-undef: "off" */
ReactDOM.render(<AppClient />, document.getElementById('app'))
