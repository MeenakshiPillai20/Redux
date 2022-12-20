import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 5,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        multiplication: (state) => {
            state.value *=5
        },
        division: (state) => {
            state.value /=5
        }
        // incrementByAmount: (state,action) => {
        //     state.value += action.payload
        // },
    }
})
export const {increment, decrement,multiplication,division} = counterSlice.actions
export default counterSlice.reducer