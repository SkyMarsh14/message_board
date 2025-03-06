const query = require("./../db/queries");
const asyncHandler = require("express-async-handler");
const formController = {
  get: asyncHandler(async (req, res) => {
    res.render("messageForm");
  }),

  post: async (req, res) => {
    const data = req.body;
    const added = new Date();
    await query.addUser(data.user_name, data.user_message, added);
    res.status(201).redirect("/");
  },
};

module.exports = formController;
