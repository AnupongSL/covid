const router = require('express').Router();

router.use('/covid', require('./covid_data.route'))

module.exports = router 