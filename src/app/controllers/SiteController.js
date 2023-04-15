const Smartwatch = require('../models/Smartwatch');

class SiteController {
    // [GET] /
    home(req, res, next) {
        // res.render('home');

        Smartwatch.find({})
            .lean()
            // .then(smartwatches => {res.json(smartwatches)})
            // console.log(smartwatches)})
            .then((smartwatches) => res.render('home', { smartwatches }))
            // .catch(err => {res.status(400).json({error: 'ERROR!!!'})});
            .catch(next);

        // console.log(err)});
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
