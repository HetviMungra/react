// app/Store.jsx
import { configureStore } from "@reduxjs/toolkit";
import counter from "../Features/CounterSlice";
import todo from "../Features/TodoSlice";
import task from "../Features/TaskSlice"; // Import the new task slice

export const store = configureStore({
    reducer: {
        counterKey: counter,
        todoKey: todo,
        taskKey: task, // Add task reducer
    },
});
