const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDataBase = () => {
  mongoose
    .connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => {
      console.log("Mongo DB connected sucessfully".brightCyan);
    })
    .catch((err) => console.log(err));
};

module.exports = connectDataBase;
