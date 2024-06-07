import { createSlice } from "@reduxjs/toolkit";





export const verifyProfileState = createSlice({
    name: "verifyProfileState",
    initialState: {
        verifyProfileModal: false,
        isUserVerify: false
    },
    reducers: {
        setVerifyProfileModal: (state, action) => {
            console.log(state.verifyProfileModal, 'ok1');
            
            state.verifyProfileModal = action.payload
            console.log(state.verifyProfileModal, 'ok2');

        },
        setUserVerify: (state, action) => {
            state.isUserVerify = action.payload
        }
    }
})
export const { setVerifyProfileModal, setUserVerify } = verifyProfileState.actions
export default verifyProfileState.reducer