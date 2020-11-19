const { Router } = require("express");
const routes = Router();
const SensorController = require("./Controllers/SensorController");


routes.get("/", (request, response) => {
    response.render("index.html");
});

routes.get("/devs", SensorController.index);
routes.post("/temp/:value", SensorController.storeTemp);
routes.post("/lum", SensorController.storeLum);
routes.post("/acce", SensorController.storeAcce);
routes.post("/ruido", SensorController.storeRuido);
routes.post("/batimento", SensorController.storeBatimento);


module.exports = routes;
