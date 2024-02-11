const express = require('express');
const router = express.Router();
const { getDomaines, createDomaine, deleteDomaine } = require('../controllers/domaineController');

router.get('/', getDomaines);

router.post('/', createDomaine);

router.delete('/:id', deleteDomaine);

module.exports = router;