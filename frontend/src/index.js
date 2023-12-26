import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import './index.css'

import "./global.css";
import { RecoilRoot } from "recoil";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
);