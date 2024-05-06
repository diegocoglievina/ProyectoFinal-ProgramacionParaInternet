const express = require('express');
const ProjectController = require('../controllers/project');

const router = express.Router();

router.get('/', ProjectController.home);
router.get('/test', ProjectController.test);

// Update the route to match the controller method name
router.post('/projects', ProjectController.saveProject);
router.delete('/projects/:id', ProjectController.deleteProject);
router.put('/projects/:id', ProjectController.updateProject);

module.exports = router;
