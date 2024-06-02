import { createSlice } from "@reduxjs/toolkit";


export const rootSlice = createSlice({
    name: "rootSlice",
    initialState: {
        isMessage: false,
        isNotification: false,
        isLikes: false,
        isSettings: false,
        newMessage: false,
        newNotification: true,
        newLike: true,
        newSetting: false,
        topProfile: false,
        chatId: '',
        mobileChat: false,
        mobileScreen: false,
        typingState: false,
        typingChatId: 0,
        rerender: false


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
        },
        topProfileState: (state, action) => {
            switch (action.payload) {
                case 'topProfile-enable':
                    state.topProfile = true;
                break;
                case 'topProfile-disable':
                    state.topProfile = false;
                break;
            }
        },
        setChatId: (state, action) => {
            
            state.chatId = action.payload
        },
        mobileChatState: (state, action) => {
            switch(action.payload) {
                case 'mobileChat-open':
                    state.mobileChat = true
                break;
                case 'mobileChat-close':
                    state.mobileChat = false
                break;
            }
        }, 
        setMobileScreen: (state, action) => {
            action.payload ? 
                state.mobileScreen = true 
                : 
                state.mobileScreen = false
        },
        setTypingState: (state, action) => {
            action.payload ? 
                state.typingState = true 
                : 
                state.typingState = false
        },
        setTypingChatId: (state, action) => {
            state.typingChatId = action.payload
        },
        setRerender: (state) => {
            state.rerender = !state.rerender
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
    NewSettingState,
    topProfileState,
    setChatId,
    mobileChatState,
    setMobileScreen,
    setTypingState,
    setTypingChatId,
    setRerender
} = rootSlice.actions

export default rootSlice.reducer