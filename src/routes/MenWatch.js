const express = require('express');
const router = express.Router();

const MenWatchController = require('../app/controllers/MenWatchController');

router.get('/create', MenWatchController.create);
router.post('/store', MenWatchController.store);
router.get('/:id/edit', MenWatchController.edit);
router.post('/handle-form-actions', MenWatchController.handleFormActions);
router.post(
    '/handle-form-actions-restore',
    MenWatchController.handleFormActionsRestore,
);
router.put('/:id', MenWatchController.update);
router.patch('/:id/restore', MenWatchController.restore);
router.delete('/:id', MenWatchController.delete);
router.delete('/:id/force', MenWatchController.forceDelete);
router.get('/:slug', MenWatchController.show);
router.get('/:slug', MenWatchController.show);

module.exports = router;
