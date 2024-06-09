import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
	name: 'likesSlice',
	initialState: {
		likesModal: false
	},
	reducers: {
		likesModalState: (state, action) => {
			// console.log( action.payload);

			switch (action.payload) {
				case 'open-likesModal':
					state.likesModal = true;
					// console.log('likesModal open open');
					break;
				case 'close-likesModal':
					state.likesModal = false;
					// console.log('likesModal close close');
					break;
			}
		}
	}
});

export const { likesModalState } = likesSlice.actions;

export default likesSlice.reducer;
