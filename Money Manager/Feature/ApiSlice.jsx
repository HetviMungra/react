import { createAction, createSlice } from "@reduxjs/toolkit"



export const decrement = createAction ('Money/decrement')
export const Money = createSlice ({
    name : "Money",
    initialState:{count_money:0},
    reducers:{
        increment:(state,action) => {
            state.count_money += action.payload
        }
    },
    extraReducers:(builder) => {
            builder.addCase(decrement,(state,action) => {
                state.count_money -= action.payload
            })
        }
    })


export const {increment} = Money.actions
export default Money.reducer