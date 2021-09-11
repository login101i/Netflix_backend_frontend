const app = require("./app");
const dotenv = require("dotenv");
var colors = require("colors");

const connectDataBase = require("./config/connectDataBase");

dotenv.config({ path: "backend/config/config.env" });

connectDataBase();

app.listen(process.env.PORT, () => {
  console.log(`Serwer działa na porcie ${process.env.PORT} w procesie ${process.env.NODE_ENV}`.brightMagenta);
});
