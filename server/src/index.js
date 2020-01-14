const express = require('express')
const mongoose = require('mongoose')

const keys = require('../config/keys')
require('./models/user')
require('./services/passport')

const app = express()
require('./routes/authRoute')(app)

mongoose.connect(keys.mongodbUri,(err) => {
  if(err){
    console.log('Error connecting to MongoDB: ', err.message)
  }
  else{
    console.log('Successfully connected to MongoDB...')
  }
})


const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
  console.log('Listening....')
})