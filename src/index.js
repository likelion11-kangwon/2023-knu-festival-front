import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { AxiosProvider } from "./libs/axios";

import Modal from 'react-modal';
Modal.setAppElement('#root');

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AxiosProvider>
      <App />
    </AxiosProvider>
  </BrowserRouter>
);
