/* eslint no-console: "off" */
import path from 'path'
import { Server } from 'http'
import Express from 'express'
import React from 'react'
import axios from 'axios'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import { App } from './components/App'

const app = new Express()
const server = new Server(app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(Express.static(path.join(__dirname, 'static')))

app.get('/api', async (req, res) => {
  const apiUrl = 'http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6'
  const result = await axios.get(apiUrl)
  res.json(result.data)
})

app.get('*', (req, res) => {
  let status = 200
  const context = {}

  const markup = renderToString(
    <Router location={req.url} context={context}>
      <App />
    </Router>,
  )

  if (context.url) {
    return res.redirect(302, context.url)
  }

  if (context.is404) {
    status = 404
  }

  return res.status(status).render('index', { markup })
})

const port = process.env.PORT || 3000

server.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }
  return console.info(`Server running on http://localhost:${port}`)
})
