/*
  since we will upload to heroku, we need to tell heroku which command to run the app > package.json
  - start

  we also need to tell heroku which version of nodejs that we use: 
  - engines
*/

const path = require('path')
const express = require('express')
const app = express()

const publicPath = path.join(__dirname, '/../public')

//////////////////////////////////
// MIDDLEWARE
//////////////////////////////////

app.use(express.static(publicPath))

//////////////////////////////////
// SERVER
//////////////////////////////////
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}...`))
