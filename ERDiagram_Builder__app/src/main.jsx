// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
// import { Auth0Provider } from "@auth0/auth0-react";
// import config from "./auth_config.json";
// import "./App.css";
import config from "./components/Authentication/auth_config.json"
const domain = config.domain;
const clientId = config.clientId;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
