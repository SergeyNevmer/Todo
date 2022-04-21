import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./normalize.css";

import { App } from "./App/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
