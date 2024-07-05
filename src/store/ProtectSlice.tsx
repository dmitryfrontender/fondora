import { createSlice } from '@reduxjs/toolkit';

export const protectSlice = createSlice({
	name: 'protectSlice',
	initialState: {
		protectModal: false,
		reportComponent: false,
		reportModal: false,
		dotsModal: false,
		blockUserModal: false,
		userAvatar: '',
		userName: '',
		userAge: 0,
		userVerified: false,
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
		setReportModal: (state, action) => {
			state.reportModal = action.payload;

			if (action.payload === false) {
				state.userName = '';
				state.userAvatar = '';


			}

		},
		setDotsModal: (state, action) => {
			state.dotsModal = action.payload;

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
		reportUserAge: (state, action) => {
			state.userAge = action.payload;
		},
		reportUserVerified: (state, action) => {
			state.userVerified = action.payload;
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

export const { protectModalState, setReportPage, reportUserAvatar, reportUserName, reportUserAge, reportUserVerified, toggleToReport, blockUserModalState, toggleToBlockUser, setReportModal, setDotsModal } = protectSlice.actions;
export default protectSlice.reducer;
