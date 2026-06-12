import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

import PostProvider from "./context/PostContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <PostProvider>

    <BrowserRouter>

      <App />

    </BrowserRouter>

  </PostProvider>

);