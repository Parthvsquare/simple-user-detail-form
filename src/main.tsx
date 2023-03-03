import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//@ts-expect-error
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
