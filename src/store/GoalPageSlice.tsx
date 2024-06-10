import { createSlice } from '@reduxjs/toolkit';

export const GoalPageSlice = createSlice({
	name: 'GoalPageSlice',
	initialState: {
		goalPage: false,
		goalPageModal: false
	},
	reducers: {
		setGoalPage: (state, action) => {
			state.goalPage = action.payload;
		},
		setGoalPageModal: (state, action) => {

			state.goalPageModal = action.payload;
		}
	}
});

export const { setGoalPage, setGoalPageModal } = GoalPageSlice.actions;
export default GoalPageSlice.reducer;
