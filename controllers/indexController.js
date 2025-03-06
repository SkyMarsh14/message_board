const asynchanlder = require("express-async-handler");
const query = require("./../db/queries");
const indexController = {
  index: asynchanlder(async (req, res) => {
    const messages = await query.getAllMessages();
    res.render("index", { messages });
  }),
};
module.exports = indexController;
