const app = require("./app");
const dotenv = require("dotenv");
var colors = require("colors");
const mongoose = require("mongoose");

dotenv.config({ path: "backend/config/config.env" });

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

app.listen(process.env.PORT, () => {
  console.log(`Serwer działa na porcie ${process.env.PORT} w procesie ${process.env.NODE_ENV}`.brightMagenta);
});
