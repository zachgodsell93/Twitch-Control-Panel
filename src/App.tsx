import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Chat } from "./views/Chat";
import { General } from "./views/General";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./views/Login";
import { Authenticated } from "./layouts/Authenticated";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<Authenticated />}>
						<Route path="/dashboard" element={<General />} />
						<Route path="/chat" element={<Chat />} />
					</Route>
				</Route>
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
