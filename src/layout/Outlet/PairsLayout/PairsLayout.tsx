import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const PairsLayout = () => {
	return (
		<>
			<Link to={'/pairs/pair/id'} />

			<Outlet />
		</>
	);
};

export default PairsLayout;
