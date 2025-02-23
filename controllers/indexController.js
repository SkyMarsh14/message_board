const asynchanlder = require("express-async-handler");
const messages = require("./../models/messages");
const indexController = {
  test: asynchanlder(async (req, res) => {
    res.render("index", { messages });
  }),
};
module.exports = indexController;
