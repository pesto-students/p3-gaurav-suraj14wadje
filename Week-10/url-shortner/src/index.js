import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGa from "react-ga";
ReactGa.initialize("G-6E41LV61BY", {});

Sentry.init({
  dsn:
    "https://00d8d64f5a4f47b1b3134efa534f8441@o4504033454129152.ingest.sentry.io/4504033456291840",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
