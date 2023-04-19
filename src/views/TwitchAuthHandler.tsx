import React from "react";
import { useLocation } from "react-router-dom";
type TwitchAuthHandlerProps = {};

const TwitchAuthHandler: React.FC<TwitchAuthHandlerProps> = (props) => {
	const [loaded, setLoaded] = React.useState<boolean>(false);
	let { hash } = useLocation();
	hash = hash.replace("#", "?");

	React.useEffect(() => {
		let params = new URLSearchParams(hash);
		let token_type: string = String(params.get("token_type"));
		let access_token: string = String(params.get("access_token"));
		let scope: string = String(params.get("scope"));
		console.log(access_token);
	}, []);
	return (
		<div className="flex flex-wrap">
			<div className="w-full py-20 px-40">Loading.....</div>
		</div>
	);
};

export { TwitchAuthHandler };
