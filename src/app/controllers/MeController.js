const Smartwatch = require('../models/Smartwatch');

class MeController {
    //[GET] me/stored/watches
    storedWatches(req, res, next) {
        let watchQuery = Smartwatch.find({});
        watchQuery
            .lean()
            .then((watches) => res.render('me/stored-watches', { watches }))
            .catch(next);
    }

    //[GET] me/trash/watches
    strashWatches(req, res, next) {
        Smartwatch.findDeleted({})
            .lean()
            .then((watches) => res.render('me/trash-watches', { watches }))
            .catch(next);
    }
}
module.exports = new MeController();
