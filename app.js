require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const detailsRouter = require("./routes/detailsRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//Form post request parser
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", formRouter);
app.use("/details", detailsRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500).send(err);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`You started an express app. Listening to the PORT : ${PORT}`);
});
