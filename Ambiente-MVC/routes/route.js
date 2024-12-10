const express = require('express');
const router = express.Router();
const CheerleaderController = require('../controllers/CheerleaderController'); 


router.get('/', CheerleaderController.getAll);
router.get('/create', CheerleaderController.showCreateForm);
router.post('/create', CheerleaderController.create);
router.get('/edit/:id', CheerleaderController.showEditForm);
router.post('/edit/:id', CheerleaderController.edit);

module.exports = router;
