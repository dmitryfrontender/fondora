import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
	name: 'likesSlice',
	initialState: {
		likesModal: false
	},
	reducers: {
		likesModalState: (state, action) => {

			switch (action.payload) {
				case 'open-likesModal':
					state.likesModal = true;
					break;
				case 'close-likesModal':
					state.likesModal = false;
					break;
			}
		}
	}
});

export const { likesModalState } = likesSlice.actions;

export default likesSlice.reducer;
