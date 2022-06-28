import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

import App from "./App";
import theme from "./themes";
import "@fontsource/nunito";
import { store } from "./store";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
