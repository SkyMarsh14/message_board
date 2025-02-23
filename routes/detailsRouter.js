const { Router } = require("express");
const detailsController = require("../controllers/detailsController");
const detailsRouter = Router();

detailsRouter.get("/:msgId", detailsController);

module.exports = detailsRouter;
