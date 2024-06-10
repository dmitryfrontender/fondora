import { createSlice } from '@reduxjs/toolkit';

export const verifyProfileState = createSlice({
	name: 'verifyProfileState',
	initialState: {
		verifyProfileModal: false,
		isUserVerify: false
	},
	reducers: {
		setVerifyProfileModal: (state, action) => {

			state.verifyProfileModal = action.payload;
		},
		setUserVerify: (state, action) => {
			state.isUserVerify = action.payload;
		}
	}
});
export const { setVerifyProfileModal, setUserVerify } = verifyProfileState.actions;
export default verifyProfileState.reducer;
