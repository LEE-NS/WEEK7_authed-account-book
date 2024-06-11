import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./style/GlobalStyle.jsx";
import { Provider } from "react-redux";
import store from "./redux/config/configStore.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
