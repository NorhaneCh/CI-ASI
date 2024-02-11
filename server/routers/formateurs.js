const express = require('express');
const router = express.Router();

const { getFormateurs, createFormateur, deleteFormateur } = require('../controllers/formateurController');
const e = require('express');


router.get('/', getFormateurs);

router.post('/', createFormateur);

router.delete('/:id', deleteFormateur);

module.exports = router;