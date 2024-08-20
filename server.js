// server.js
const https = require("https");
const fs = require("fs");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/vanhungtran.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/vanhungtran.com/fullchain.pem"),
};

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      handle(req, res);
    })
    .listen(443, (err) => {
      if (err) throw err;
      console.log("> Ready on https://localhost:443");
    });
});
