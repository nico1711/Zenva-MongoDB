const express = require('express')
const router = express.Router()
// Needs the .. because it's on an a parent folder
const City = require('../models/City.js')

// Filters with the query given in the url
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

// Gets the Id and looks for an specific item
router.get('/:id', (req, res, next) => {

	City.findById(req.params.id)
	.then(city => {
		res.json({
			confirmation: 'success',
			data: city
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'City with Id ' + req.params.id + ' not found.'
		})
	})

})

module.exports = router