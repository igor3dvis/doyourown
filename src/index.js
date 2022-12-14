import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store.ts";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> 
        <App />
      </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//for state console output __ for dev only
window.store = store;
