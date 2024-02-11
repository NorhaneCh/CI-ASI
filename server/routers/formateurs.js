const express = require('express');
const router = express.Router();

const { getFormateurs, createFormateur, deleteFormateur, getFormateurById } = require('../controllers/formateurController');
const e = require('express');


router.get('/', getFormateurs);

router.post('/', createFormateur);

router.delete('/:id', deleteFormateur);

router.get('/:id', getFormateurById);

module.exports = router;