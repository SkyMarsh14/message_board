const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//Form post request parser
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", formRouter);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`You started an express app. Listening to the PORT : ${PORT}`);
});
