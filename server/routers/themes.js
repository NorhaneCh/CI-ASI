const express = require('express');
const router = express.Router();
const { getThemes, createTheme, deleteTheme, getThemeByDomaine } = require('../controllers/themeController');

router.get('/', getThemes);

router.post('/', createTheme);

router.delete('/:id', deleteTheme);

router.get('/bydomain/:domId', getThemeByDomaine);

module.exports = router;