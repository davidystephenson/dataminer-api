const express = require('express')

const app = express()

const users = [
  {
    hours: 10,
    website: 'cnn.com',
    name: 'david'
  },
  { 
    name: 'rein',
    website: 'nos.nl',
    hours: 8
  },
  {
    name: 'lisa',
    website: 'codaisseur.com',
    hours: 4
  }
]

// function getUsers (request, response) {
//   response.send(users)
// }
// app.get('/', getUsers)
// 
// app.get(
//   '/test',
//   (request, response) => response.send('test!')
// )

app.get(
  '/',
  (request, response) => response.send(users)
)

app.get(
  '/user/:username',
  (request, response) => {
    const user = users
      .find(user => user.name === request.params.username)

    response.send(user)
  } 
)

function getTest (request, response) {
  response.send('test!')
}
app.get(
  '/',
  getTest
)

const port = 4000

function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port, onListen)