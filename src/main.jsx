import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./App.jsx";
import { theme } from "./config/theme.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    ,
  </BrowserRouter>
);
