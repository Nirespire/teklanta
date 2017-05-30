const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
})

app.get('/.well-known/acme-challenge/:content', function(req, res) {
  res.send('qY4WNtCgMcpWlgYLjbKwqSJA_M9R8CfRLSFYyQ0tnPQ.p91aPo3ng6nofzJ52EWOf5cCA-7mpGgovgsLNPGuKiA')
})