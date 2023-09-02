const router = require('express').Router()
const Waterfall = require('../models/Waterfall.model')

router.get('/waterfalls', (req, res, next) => {
    Waterfall.find()
    .then(allWaterfalls => res.render('waterfalls/waterfalls-list.hbs', {waterfalls: allWaterfalls}) 
)

} )


module.exports = router;