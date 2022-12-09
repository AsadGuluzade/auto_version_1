const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: `Coyotiv's Express + Mongo starter Template`, Onur: 'This is message' })
})

module.exports = router
