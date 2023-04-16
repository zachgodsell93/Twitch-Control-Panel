import React, { useState, useEffect } from "react";
import { SettingsCard } from "../components/settings/SettingsCard";
import { useLocation, useSearchParams } from "react-router-dom";

const Settings: React.FC<SettingsProps> = (props) => {
	const [settingsSaved, setSettingsSaved] = useState(false);
	const [authCheckDone, setAuthCheckDone] = useState(false);

	const { hash } = useLocation();

	useEffect(() => {
		let params = new URLSearchParams(hash);
		let token_type: string = String(params.get("token_type"));
		let access_token: string = String(params.get("access_token"));
		let scope: string = String(params.get("scope"));
		console.log(access_token);

		if (token_type === "bearer") {
			setAuthCheckDone(true);
			console.log(token_type);
		}
	}, []);
	return (
		<div className="px-20 pt-20">
			<SettingsCard authCheck={authCheckDone} />
		</div>
	);
};

type SettingsProps = {};

export { Settings };
