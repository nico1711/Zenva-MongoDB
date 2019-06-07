const express = require('express')
const router = express.Router()
const City = require('../models/City.js')

router.get('/', (req, res, next) => {
	const query = req.query

	City.find(query)
	.then(cities => {
		res.json({
			confirmation: 'success',
			data: cities
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})

})

module.exports = router