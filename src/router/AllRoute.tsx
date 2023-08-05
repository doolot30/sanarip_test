import React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import ScriptDom from '../pages/ScriptDom';
import GetPeople from '../pages/GetPeople';
import Choose from '../pages/Choose';

function AllRoute() {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route path='' element={<Choose />} />
				<Route path='users' element={<GetPeople />} />
				<Route path='script' element={<ScriptDom />} />
			</Route>
		</Routes>
	);
}

export default AllRoute;
