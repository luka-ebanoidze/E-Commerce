import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { Providers } from "./providers/Providers.tsx";
import { CartProvider } from "react-use-cart";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <CartProvider>
          <App />
        </CartProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
