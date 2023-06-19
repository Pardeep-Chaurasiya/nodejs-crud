const express = require('express');
const dummyController = require('../controllers/dummyControllers');

const routes = express.Router();

routes.get('/', dummyController.getDummyRoute);

routes.get('/:id', dummyController.getUserDummyRoute);

routes.post('/', dummyController.postDummyRoute);

routes.put('/:id', dummyController.putDummyRoute);

routes.delete('/:id', dummyController.deleteDummyRoute);

module.exports = routes;
