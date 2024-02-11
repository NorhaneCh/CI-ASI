const express = require('express');
const router = express.Router();

const { getPartenaires, createPartenaire, deletePartenaire, getPartenaireById } = require('../controllers/partenaireController');
const { route } = require('./domaines');


router.get('/', getPartenaires);

router.post('/', createPartenaire);

router.delete('/:id', deletePartenaire);

router.get('/:id', getPartenaireById);


module.exports = router;