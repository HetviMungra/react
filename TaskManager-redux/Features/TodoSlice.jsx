// Features/TodoSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
    name: "todo",
    initialState: { tasks: [] },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((e) => e.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
    },
});

export const { addTask, deleteTask, updateTask } = todo.actions;
export default todo.reducer;
