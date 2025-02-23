const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const formRouter = require("./controllers/formController");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/messageForm", formRouter);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`You started an express app. Listening to the PORT : ${PORT}`);
});
