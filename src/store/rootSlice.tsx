import { createSlice } from "@reduxjs/toolkit";


export const rootSlice = createSlice({
    name: "rootSlice",
    initialState: {
        isMessage: false,
        isNotification: false,
        isLikes: false,
        isSettings: false,
        newMessage: true,
        newNotification: true,
        newLike: true,
        newSetting: true,

    },
    reducers: {
        MessageState: (state, action) => {
            switch (action.payload) {
                case 'messages-true':
                    state.isMessage = true;
                break;
                case 'messages-false':
                    state.isMessage = false;
                break;
            }
        },
        NotificationState: (state, action) => {
            switch (action.payload) {
                case 'notification-true':
                    state.isNotification = true;
                break;
                case 'notification-false':
                    state.isNotification = false;
                break;
            }
        },
        LikeState: (state, action) => {
            switch (action.payload) {
                case 'like-true':
                    state.isLikes = true;
                break;
                case 'like-false':
                    state.isLikes = false;
                break;
            }
        },
        SettingState: (state, action) => {
            switch (action.payload) {
                case 'settings-true':
                    state.isSettings = true;
                break;
                case 'settings-false':
                    state.isSettings = false;
                break;
            }
        },
        NewMessageState: (state, action) => {
            switch (action.payload) {
                case 'newMessage-true':
                    state.newMessage = true;
                break;
                case 'newMessage-false':
                    state.newMessage = false;
                break;
            }
        },
        NewNotificationState: (state, action) => {
            switch (action.payload) {
                case 'newNotification-true':
                    state.newNotification = true;
                break;
                case 'newNotification-false':
                    state.newNotification = false;
                break;
            }
        },
        NewLikeState: (state, action) => {
            switch (action.payload) {
                case 'newLike-true':
                    state.newLike = true;
                break;
                case 'newLike-false':
                    state.newLike = false;
                break;
            }
        },
        NewSettingState: (state, action) => {
            switch (action.payload) {
                case 'newSetting-true':
                    state.newSetting = true;
                break;
                case 'newSetting-false':
                    state.newSetting = false;
                break;
            }
        }
    }
})

export const { 
    MessageState, 
    NotificationState, 
    LikeState, SettingState, 
    NewMessageState, 
    NewNotificationState, 
    NewLikeState, 
    NewSettingState  
} = rootSlice.actions

export default rootSlice.reducer