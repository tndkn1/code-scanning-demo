const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const site = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

app.get("/", (req, res) => {
  const greet = site.replace("%%_USER_NAME%%", req.query.name ?? "");
  res.send(greet);
});

if (require.main === module) {
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`The webpage is live on http://localhost:${port} :)`);
  });
}

module.exports = app;
