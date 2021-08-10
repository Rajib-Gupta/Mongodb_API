const express = require("express");
const dotenv =require('dotenv').config()
const app = express();

const mongoose = require("mongoose");

const employee = require("./routes/router");

require("./mongodb/db_config");

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/employee", employee);

const PORT= process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server listening on port:${PORT}`);
});
