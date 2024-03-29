const express = require('express');
const router = express.Router();

const { getFormations, createFormation, deleteFormation, getFormationByDomaine, getFormationById } = require('../controllers/formationController');


router.get('/', getFormations);

router.post('/', createFormation);

router.delete('/:id', deleteFormation);

router.get('/:domId', getFormationByDomaine);

router.get('/:id', getFormationById);

module.exports = router;

