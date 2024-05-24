import { createSlice } from "@reduxjs/toolkit";




export const protectSlice = createSlice({
    name: "protectSlice",
    initialState: {
        protectModal: false,
        reportComponent: false,
        userAvatar: '',
        userName: '',
    },
    reducers: {
        protectModalState: (state, action) => {
            state.protectModal = action.payload
            if (action.payload === false) {
                state.userName = '';
                state.userAvatar = '';
            }
        },
        setReportPage: (state, action) => {
            state.reportComponent = action.payload
            if (action.payload === false) {
                state.userName = '';
                state.userAvatar = '';
            }
        },
        toggleToReport: (state) => {
            state.protectModal = false;
            state.reportComponent = true;


        },
        reportUserAvatar: (state, action) => {
            state.userAvatar = action.payload
        },
        reportUserName: (state, action) => {
            state.userName = action.payload
        }
    }
})

export const { protectModalState, setReportPage, reportUserAvatar, reportUserName, toggleToReport } = protectSlice.actions
export default protectSlice.reducer