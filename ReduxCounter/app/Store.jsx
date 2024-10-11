import { configureStore } from "@reduxjs/toolkit";
import  counter  from "../assets/Features/CounterSlice";


export const store = configureStore({

    reducer:{
        counterKey : counter
    }
})