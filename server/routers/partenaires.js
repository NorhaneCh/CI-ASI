const express = require('express');
const router = express.Router();

const { getPartenaires, createPartenaire, deletePartenaire } = require('../controllers/partenaireController');


router.get('/', getPartenaires);

router.post('/', createPartenaire);

router.delete('/:id', deletePartenaire);


module.exports = router;