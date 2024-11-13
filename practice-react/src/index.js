import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoContextProvider } from "./useReducer/Contexts/todoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </Router>
  </React.StrictMode>
);
