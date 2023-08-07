const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");

const API_KEY = process.env.API_KEY;
const URL = "https://api.meaningcloud.com/sentiment-2.1?";

console.log(`Your API key is ${API_KEY}`);

const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// POST Route
app.post("/url", async function (req, res) {
  let url = req.body.url;

  console.log(`Url: ${url}`);

  const input = `${URL}key=${API_KEY}&url=${url}&lang=en`;

  const response = await fetch(input);

  const responseData = await response.json();

  res.send(responseData);
});

// designates what port the app will listen to for incoming requests
app.listen(8088, function () {
  console.log("Example app listening on port 8088!");
});
