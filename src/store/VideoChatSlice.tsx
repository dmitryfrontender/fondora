import { createSlice } from '@reduxjs/toolkit';

export const videoChatSlice = createSlice({
	name: 'videoChatSlice',
	initialState: {
		videoChatModal: false,
		userAvatar: '',
		userName: ''
	},
	reducers: {
		setVideoChatModal: (state, action) => {
			state.videoChatModal = action.payload;
		},
		setUserAvatar: (state, action) => {
			state.userAvatar = action.payload;
		},
		setUserName: (state, action) => {
			state.userName = action.payload;
		}
	}
});

export const { setVideoChatModal, setUserAvatar, setUserName } = videoChatSlice.actions;
export default videoChatSlice.reducer;
