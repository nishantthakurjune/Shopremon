const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// CRUD routes
router.post('/', dataController.create);
router.get('/', dataController.findAll);
router.get('/:id', dataController.findOne);
router.put('/:id', dataController.update);
router.delete('/:id', dataController.delete);

module.exports = router;