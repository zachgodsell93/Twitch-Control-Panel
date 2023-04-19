import React from "react";
import { Stats } from "../components/dashboard/Stats";
import { TwitchChat } from "../components/dashboard/TwitchChat";

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = (props) => {
	React.useEffect(() => {}, []);
	return (
		<>
			<TwitchLinkBanner />
			<Stats />

			<div className="flex flex-wrap">
				<div className="w-full mb-12 xl:mb-0 px-4"></div>
			</div>
			<div className="flex flex-wrap">
				<div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
					<TwitchChat channel="dobstar93" />
				</div>
				<div className="w-full xl:w-4/12 px-4"></div>
			</div>
			<div className="flex flex-wrap mt-4">
				<div className="w-full mb-12 xl:mb-0 px-4"></div>
				<div className="w-full xl:w-4/12 px-4"></div>
			</div>
		</>
	);
};

type TwitchLinkBannerProps = {};

const TwitchLinkBanner: React.FC<TwitchLinkBannerProps> = () => {
	const channelScopes: Array<string> = [
		"channel:manage:polls",
		"channel:read:polls",
		"channel:manage:predictions",
		"channel:read:predictions",
		"channel:read:goals",
		"chat:edit",
		"chat:read",
		"moderator:read:followers",
		"channel:read:subscriptions",
		"channel:read:redemptions",
	];

	const twitchAuthorize = () => {
		let clientId: string = process.env.REACT_APP_CLIENT_ID || "";
		let scope: string = "";
		let redirectURI =
			process.env.NODE_ENV === "development"
				? "http://localhost:3000/twitchAuthSuccess"
				: "https://twitch.zachgodsell.com/twitchAuthSuccess";

		channelScopes.forEach((item, idx) => {
			if (idx === channelScopes.length - 1) {
				scope = scope + item;
			} else {
				scope = scope + item + "+";
			}
		});
		console.log(encodeURIComponent(scope));
		const url = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectURI}`;
		window.open(url, "_blank")!.focus();
	};

	return (
		<div className="relative flex flex-wrap">
			<div className="absolute top-1 right-3">x</div>
			<div className="w-full py-4 bg-tw-purple text-white text-center">
				<p>You need to connect your twich account before using this platform</p>
			</div>
			<div className="w-full bg-tw-purple text-white text-center pb-2">
				<button
					onClick={twitchAuthorize}
					className=" bg-tw-purple-dark px-2 py-1 rounded-md"
				>
					Link Twitch
				</button>
			</div>
		</div>
	);
};

export { Dashboard };
