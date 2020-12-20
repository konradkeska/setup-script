import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import FullStory from "react-fullstory";
import firebase from "firebase/app";
import "firebase/analytics";

import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_API_KEY!);

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

ReactDOM.render(
  <React.StrictMode>
    <>
      <FullStory org={process.env.REACT_APP_FULLSTORY_ORG_ID!} />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
