const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const path = require("path");
const port = 3000;

const app = express();
const server = http.createServer(app);
const constant = require("./helper/constant.js");

const knex = require("knex")(constant.config.db);
const { attachPaginate } = require("knex-paginate");
attachPaginate();
app.knexConnection = knex;

app.set("port", port);

//static files
app.use(
  "/public/",
  express.static(path.join(__dirname, "public"), { maxAge: "7d" })
);

app.use(cors());

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "500mb" }));
app.use("/", require("./microServices/router"));
// app.use("/", () => console.log("hotting here=="));
server.listen(app.get("port"), "127.0.0.1");

const onError = (error) => {
  if (error.syscall !== "listen") throw error;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
const onListening = () => {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Server Listening on My custom port " + bind);
};
server.on("error", onError);
server.on("listening", onListening);
