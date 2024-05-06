var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);

// Nuevo
router.post('/save-project', ProjectController.saveProject)
module.exports = router;    