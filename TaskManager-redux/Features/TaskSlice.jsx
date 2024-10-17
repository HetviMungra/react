// Features/TaskSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

export const task = createSlice({
    name: "task",
    initialState: { tasks: [] },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
    },
});

export const { addTask, deleteTask, updateTask } = task.actions;
export default task.reducer;
