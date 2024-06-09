import { createSlice } from '@reduxjs/toolkit';

export const boostSlice = createSlice({
	name: 'boostSlice',
	initialState: {
		boostModal: false
	},
	reducers: {
		boostModalState: (state, action) => {
			switch (action.payload) {
				case 'open-boostModal':
					state.boostModal = true;
					break;
				case 'close-boostModal':
					state.boostModal = false;
					break;
			}
		}
	}
});

export const { boostModalState } = boostSlice.actions;
export default boostSlice.reducer;
