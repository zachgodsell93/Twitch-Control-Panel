import React from "react";
import Sidebar from "./components/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Chat } from "./views/Chat";
import { Dashboard } from "./views/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./views/Login";
import { Authenticated } from "./layouts/Authenticated";
import { Settings } from "./views/Settings";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<Authenticated />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/settings" element={<Settings />} />
					</Route>
				</Route>
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
