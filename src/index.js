import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./connectors";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
      <div>
        {/* <h1>Decentralised Banking</h1> */}
        {/* <h3>
          Bank Smart Contract Address :
          0xd00337DA25467bB5cF694303A622E9E429A90b52
        </h3> */}
      </div>
      <App />
    </BrowserRouter>
  </Web3ReactProvider>
);

reportWebVitals();
