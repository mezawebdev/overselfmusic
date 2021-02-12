require("dotenv").config();
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const controllers = require("./api/controllers");

app.use((req, res, next) => {
  if (req.originalUrl === "/api/stripe-webhook") {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

app.use(cookieParser());

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
