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

function App() {
	return (
		<Router>
			<Sidebar header="test" />
			<div className="ml-0 lg:ml-64">
				<Routes>
					<Route path="/" element={<Chat />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
