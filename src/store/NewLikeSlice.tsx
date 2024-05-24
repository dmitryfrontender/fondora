import { createSlice } from "@reduxjs/toolkit";






export const NewLikeSlice = createSlice({
    name: "NewLikeSlice",
    initialState: {
        newLikeModal: false,
    },
    reducers: {
        newLikeModalState: (state, action) => {
            state.newLikeModal = action.payload
        }
    }
})



export const { newLikeModalState } = NewLikeSlice.actions;
export default NewLikeSlice.reducer