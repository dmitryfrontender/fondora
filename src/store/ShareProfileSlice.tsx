import { createSlice } from "@reduxjs/toolkit";


export const shareProfileSlice = createSlice({

    name: "shareProfileSlice",
    initialState: {
        shareProfileModal: false
    },
    reducers: {
        shareProfileState: (state, action) => {
            state.shareProfileModal = action.payload
        }
    }
})

export const { shareProfileState } = shareProfileSlice.actions
export default shareProfileSlice.reducer

