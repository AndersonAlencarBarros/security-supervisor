const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const path = require("path");


app.use(cors());
app.use(express.json());
app.use(routes);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const server = app.listen(3000, () => {
    console.log("Server Up and Running!!");
});

const io = require("socket.io").listen(server);
