// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./components/auth_config.json";
import "./App.css";
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
