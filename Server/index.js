const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("");

app.listen(8000, () => {
  console.log("Server listening on 8000");
});
