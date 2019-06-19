const express = require('express')
const mongoose = require('mongoose')

// connect to our Mongo DB: 
mongoose.connect('mongodb://localhost/world', { useNewUrlParser: true })
.then(data => {
	console.log('Mongo DB connection success!')

})
.catch(err => {
	console.log('Mongo DB connection failed: ' + err.message);
})

const app = express()

const cities = require('./routes/cities')
app.use('/cities', cities)

const countries = require('./routes/countries')
app.use('/countries', countries)



app.listen(5000)
console.log('App running http://localhost:5000')