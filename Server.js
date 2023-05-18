const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/TaskRoute");

const cors = require("cors");

const app = express();
const PORT =  5000;

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);
mongoose
  .connect('mongodb://127.0.0.1:27017/todoCrud')
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
