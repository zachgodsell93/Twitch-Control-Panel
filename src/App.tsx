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
import General from "./views/General";

function App() {
	return (
		<Router>
			<Sidebar header="test" />
			<div className="ml-0 lg:ml-64 bg-slate-700 bg-no-repeat bg-full min-h-screen h-full">
				<Routes>
					<Route path="/" element={<General />} />
					<Route path="/chat" element={<Chat />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
