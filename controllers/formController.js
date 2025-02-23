const asynchanlder = require("express-async-handler");
const messages = require("./../models/messages");

const formController = {
  get: asynchanlder(async (req, res) => {
    res.render("messageForm");
  }),
  post: asynchanlder(async (req, res) => {
    console.log(req.body);
    res.send(201);
  }),
};
module.exports = formController;
