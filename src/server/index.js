/* eslint no-console: "off" */
import path from 'path'
import { Server } from 'http'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import { App } from '../client/modules/Main/App'
import { getDetails, getList } from './api'

const app = new Express()
const server = new Server(app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(Express.static(path.join(__dirname, '..', 'static')))

app.get('/api-details', getDetails)

app.get('/api-list', getList)

app.get('*', (req, res) => {
  const status = 200
  const context = {}

  const markup = renderToString(
    <Router location={req.url} context={context}>
      <App />
    </Router>,
  )

  return res.status(status).render('index', { markup })
})

const port = process.env.PORT || 3000

server.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }
  return console.info(`Server running on http://localhost:${port}`)
})
