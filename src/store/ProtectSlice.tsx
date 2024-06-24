import { createSlice } from '@reduxjs/toolkit';

export const protectSlice = createSlice({
	name: 'protectSlice',
	initialState: {
		protectModal: false,
		reportComponent: true,
		blockUserModal: false,
		userAvatar: '',
		userName: ''
	},
	reducers: {
		protectModalState: (state, action) => {
			state.protectModal = action.payload;
			if (action.payload === false) {
				state.userName = '';
				state.userAvatar = '';
			}
		},
		setReportPage: (state, action) => {
			state.reportComponent = action.payload;
			if (action.payload === false) {
				state.userName = '';
				state.userAvatar = '';
			}
		},
		toggleToReport: (state) => {
			state.protectModal = false;
			state.reportComponent = true;
		},
		toggleToBlockUser: (state) => {
			state.protectModal = false;
			state.blockUserModal = true;
		},
		reportUserAvatar: (state, action) => {
			state.userAvatar = action.payload;
		},
		reportUserName: (state, action) => {
			state.userName = action.payload;
		},
		blockUserModalState: (state, action) => {
			state.blockUserModal = action.payload;
			if (action.payload === false) {
				state.userName = '';
				state.userAvatar = '';
			}
		}
	}
});

export const { protectModalState, setReportPage, reportUserAvatar, reportUserName, toggleToReport, blockUserModalState, toggleToBlockUser } = protectSlice.actions;
export default protectSlice.reducer;
