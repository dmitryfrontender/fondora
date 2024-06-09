import { createSelector } from 'reselect';

// Memoized selector for isFeatureEnabled
export const mobileScreenEnable = createSelector(
	(state) => state.mainState,
	(rootSlice) => rootSlice.mobileScreen
);
