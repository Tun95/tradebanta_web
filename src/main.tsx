import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/Context.tsx";
import { HelmetProvider } from "react-helmet-async";
import { DropDownMenuProvider } from "./context/DrawerContext.tsx";
import { SideDrawerMenuProvider } from "./context/SideDrawerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <ContextProvider>
      <DropDownMenuProvider>
        <SideDrawerMenuProvider>
          <HelmetProvider>
            <StrictMode>
              <App />
            </StrictMode>
          </HelmetProvider>
        </SideDrawerMenuProvider>
      </DropDownMenuProvider>
    </ContextProvider>
  </Router>
);
