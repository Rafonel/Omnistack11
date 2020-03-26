const express = require("express");
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

/* 

QUERY ??? PARAMS -> GET,  ( filters, pagination)
ROUTE //// PARAMS -> Identify :id
REQUEST BODY 

*/

routes.get('/ongs', OngController.index)
routes.post("/ongs", OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

module.exports = routes;