require("dotenv").config();
const express = require("express");
require("express-async-errors");
const { PORT, SENTRY } = require("./config");
const router = require("./router");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const server = express();

Sentry.init({
  dsn: "https://c4f0e70c97f046c6b6353aa522b1ce8c@o4504033454129152.ingest.sentry.io/4504033456291841",
  // or pull from params
  // dsn: params.SENTRY_DSN,
  environment: "dev",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ server }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // or pull from params
  // tracesSampleRate: parseFloat(params.SENTRY_TRACES_SAMPLE_RATE),
});

server.use(Sentry.Handlers.requestHandler());
server.use(Sentry.Handlers.tracingHandler());
server.use(express.json());
server.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
server.use("/api", router);

server.use(Sentry.Handlers.errorHandler());

server.use((_err, _req, res, _next) => {
  console.error(_err);
  return res.send("Internal Sever Error").status(500);
});
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
