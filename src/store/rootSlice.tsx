import { createSlice } from "@reduxjs/toolkit";


export const rootSlice = createSlice({
    name: "rootSlice",
    initialState: {
        count: 0,
        isMessage: false,
        isNotification: false,
        isLikes: false,
        isSettings: false,

    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const { increment, decrement } = rootSlice.actions

export default rootSlice.reducer