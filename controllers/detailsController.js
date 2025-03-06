const asyncHandler = require("express-async-handler");
const query = require("./../db/queries");
const detailsController = asyncHandler(async (req, res) => {
  const { msgId } = req.params;
  const messages = await query.getAllMessages();
  res.render("msgDetails", { message: messages[msgId] });
});
module.exports = detailsController;
