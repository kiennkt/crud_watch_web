const MenWatch = require('../models/Smartwatch');

class MenWatchController {
    //[GET] /dong-ho-nam/:slug
    show(req, res, next) {
        MenWatch.findOne({ slug: req.params.slug })
            .lean()
            .then((menWatch) => {
                res.render('MenWatch/show', { menWatch });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('./MenWatch/create');
    }
}

module.exports = new MenWatchController();
