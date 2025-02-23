const asyncHandler = require("express-async-handler");
const messages = require("./../models/messages");

const formController = {
  get: asyncHandler(async (req, res) => {
    res.render("messageForm");
  }),

  post: asyncHandler(async (req, res) => {
    const data = req.body;
    messages.push({
      text: data.user_message,
      user: data.user_name,
      added: new Date(),
    });
    res.status(201).redirect("/");
  }),
};

module.exports = formController;
