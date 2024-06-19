import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productFetch } from "./slice/productSlice";
import cartReducer, { getTotals } from "./slice/cartSlice";
import { apiRequest } from "./slice/apiRequest";
import AuthReducer, { loadUser } from "./slice/AuthSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        auth:AuthReducer,
        [apiRequest.reducerPath]: apiRequest.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiRequest.middleware),
    });
    
    store.dispatch(productFetch());
    store.dispatch(getTotals());
    store.dispatch(loadUser(null));
    
