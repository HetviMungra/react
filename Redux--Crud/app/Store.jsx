import { configureStore } from "@reduxjs/toolkit";
import  counter  from "../Features/CounterSlice";
import todo  from "../Features/TodoSlice";


export const store = configureStore({

    reducer:{
        counterKey : counter,
        todoKey : todo,
    }
});