import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/Product/ProductsSlice";
import cartReducer from "../features/Cart/CartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
