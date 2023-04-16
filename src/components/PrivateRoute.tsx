import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate, Outlet } from "react-router-dom";
import { auth } from "../utils/firbase.config";

const PrivateRoute = (props: PrivateRouterPropTypes) => {
	const [loggedIn, setLoggedIn] = useState(false);
	let navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setLoggedIn(true);
			} else {
				navigate("/login");
			}
		});
	}, []);

	return <>{loggedIn ? <Outlet /> : <></>}</>;
};

type PrivateRouterPropTypes = {};

export { PrivateRoute };
