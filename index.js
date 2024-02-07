import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
function StartingPoint() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StartingPoint />);
