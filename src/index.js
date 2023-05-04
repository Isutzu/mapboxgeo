import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "@aws-amplify/ui-react/styles.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Flota from "./Flota";
import Vehiculo from "./Vehiculo";
import Reportes from "./Reportes";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="flota" element={<Flota />} />
        <Route path="vehiculo" element={<Vehiculo />} />
        <Route path="reportes" element={<Reportes />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
