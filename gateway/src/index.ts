import http from "http";
import amqp from  'amqplib'
import express from "express"
import {setupLogging} from '../logging'

const app = express()
const port = 4000
app.get('/check-health', (req, res) => {
  return res.send('Ok')
})

setupLogging(app)
app.listen(port, () => {
  console.log('running')
})
