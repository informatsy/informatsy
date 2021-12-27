import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { UserProvider } from "./UserContexapi";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,

  document.getElementById("root")
);
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
