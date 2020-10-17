const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    res.send("API root");
});

app.get("/acme-challenge/yAugdh6b5QzIwnNx6Se-sxGMXB7Vs7eKsgzprbyCmxA", (req, res, next) => {
    res.download(`${ __dirname }/../ssl/yAugdh6b5QzIwnNx6Se-sxGMXB7Vs7eKsgzprbyCmxA`);
});
// export the server middleware
module.exports = {
    path : '/.well-known',
    handler : app
}