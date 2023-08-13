const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");

const mockAPIResponse = require("./mockAPI.js");

const API_KEY = process.env.API_KEY;
const URL = "https://api.meaningcloud.com/sentiment-2.1?";

console.log(`Your API key is ${API_KEY}`);

const PORT = 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// POST Route
app.post("/url", async (req, res) => {
  let url = req.body.url;

  const input = `${URL}key=${API_KEY}&url=${url}&lang=en`;

  const response = await fetch(input);

  const responseData = await response.json();

  res.send(responseData);
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, () => {
  console.log("Server running...");
  console.log(`Running on localhost: ${PORT}`);
});
