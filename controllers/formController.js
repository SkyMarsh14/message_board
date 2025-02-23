const asynchanlder = require("express-async-handler");
const messages = require("./../models/messages");

const formController = asynchanlder(async (req, res) => {
  res.render("messageForm");
});
module.exports = formController;
