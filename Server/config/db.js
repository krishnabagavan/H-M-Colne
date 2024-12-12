const mongoose = require("mongoose");
const mongourl="mongodb+srv://krishnabagavan2000:<Nani@123>@cluster0.wiikx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
require("dotenv").config();
const connect = mongoose.connect(mongourl);

module.exports = {
  connect,
};
