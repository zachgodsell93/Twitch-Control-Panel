import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<Sidebar header="test" />
			<div className="font-bold text-4xl">Hello world</div>
		</div>
	);
}

export default App;
