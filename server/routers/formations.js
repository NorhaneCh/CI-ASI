const express = require('express');
const router = express.Router();

const { getFormations, createFormation, deleteFormation } = require('../controllers/formationController');


router.get('/', getFormations);

router.post('/', createFormation);

router.delete('/:id', deleteFormation);


module.exports = router;

