const { loadEnvFile } = require("node:process");
const express = require("express");
loadEnvFile();
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Sent homepage html file!");
    }
  });
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Sent about html file!");
    }
  });
});

app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Sent contact me html file!");
    }
  });
});

app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My Express app listening on port ${PORT}!`);
});
