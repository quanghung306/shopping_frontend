import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import productsReducer, { productsFetch } from "./stores/slice/productSlice";
import cartReducer, { getTotals } from "./stores/slice/cartSlice";
import { productsApi } from "./stores/slice/apiRequest";
import CartProvider, { CartContext } from "./stores/slice/CartContext";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CartProvider>
        <App />
        </CartProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
