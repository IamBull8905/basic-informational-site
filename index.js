import http from "node:http";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const server = http.createServer();
server.on("request", (req, res) => {
  let currPath = fileURLToPath(import.meta.url);
  switch (req.url) {
    case "/":
      currPath = "./index.html";
      break;
    case "/about":
      currPath = "./about.html";
      break;
    case "/contact-me":
      currPath = "./contact-me.html";
      break;
    default:
      currPath = "./404.html";
  }
  fs.readFile(currPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(8080);
