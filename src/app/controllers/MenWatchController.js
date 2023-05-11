const MenWatch = require('../models/Smartwatch');

class MenWatchController {
    //[GET] /MenWatch/:slug
    show(req, res, next) {
        MenWatch.findOne({ slug: req.params.slug })
            .lean()
            .then((menWatch) => {
                res.render('MenWatch/show', { menWatch });
            })
            .catch(next);
    }
    // [POST] MenWatch/create
    create(req, res, next) {
        res.render('./MenWatch/create');
    }
    // [POST] MenWatch/store
    store(req, res, next) {
        const watch = new MenWatch(req.body);
        watch
            .save()
            .then(() => res.redirect('/admin/me/stored/watches'))
            .catch(next);
    }
    // [GET] MenWatch/:id/edit
    edit(req, res, next) {
        MenWatch.findById(req.params.id)
            .lean()
            .then((watches) => res.render('./MenWatch/edit', { watches }))
            .catch(next);
    }
    // [PUT] MenWatch/:id
    update(req, res, next) {
        MenWatch.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/me/stored/watches'))
            .catch(next);
    }
    // [DELETE] MenWatch/:id
    delete(req, res, next) {
        MenWatch.delete({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [RESORE] MenWatch/:id/restore
    restore(req, res, next) {
        MenWatch.restore({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [DELETE] MenWatch/:id/force
    forceDelete(req, res, next) {
        MenWatch.deleteOne({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [POST] MenWatch/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                MenWatch.delete({ _id: { $in: req.body.WatchIds } })
                    .lean()
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' });
        }
    }
    // [POST] MenWatch/handle-form-actions-restore
    handleFormActionsRestore(req, res, next) {
        switch (req.body.action) {
            case 'restore':
                MenWatch.restore({ _id: { $in: req.body.deletedWatchIds } })
                    .lean()
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' });
        }
    }
}

module.exports = new MenWatchController();
