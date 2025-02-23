const asyncHandler = require("express-async-handler");
const messages = require("./../models/messages.js");
const detailsController = asyncHandler(async (req, res) => {
  const { msgId } = req.params;
  res.render("msgDetails", { message: messages[msgId] });
});
module.exports = detailsController;
