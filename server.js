const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
PORT = process.env.PORT || 4000;

//DB config

const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Successfully connected "))
  .catch(err => console.log(`There was an ${err}`));

app.get("/", (req, res) => res.send(`<h1>Thanks for Comment</h1>`));

//Use routes
app.use("./api/users", users);
app.use("./api/profile", profile);
app.use("/api/post", posts);

app.listen(PORT, () => console.log("Thank for running "));
