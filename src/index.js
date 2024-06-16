import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import productReducer, { productFetch } from "./stores/slice/productSlice";
import cartReducer, { getTotals } from "./stores/slice/cartSlice";
import { apiRequest } from "./stores/slice/apiRequest";



const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    [apiRequest.reducerPath]: apiRequest.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRequest.middleware),
});

store.dispatch(productFetch());
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
