import { bool } from "prop-types";
import React, { useState } from "react";

const SettingsCard: React.FC<SettingsCardProps> = (props) => {
	const { authCheck } = props;

	const [settingsSaved, setSettingsSaved] = useState(false);

	const channelScopes: Array<string> = [
		"channel:manage:polls",
		"channel:read:polls",
		"channel:manage:predictions",
		"channel:read:predictions",
		"channel:read:goals",
		"chat:edit",
		"chat:read",
	];

	const twitchAuthorize = () => {
		let clientId: string = process.env.REACT_APP_CLIENT_ID || "";
		let scope: string = "";
		let redirectURI =
			process.env.NODE_ENV === "development"
				? "http://localhost:3000/settings"
				: "https://twitch.zachgodsell.com/settings";

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
		<>
			<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
				<div className="rounded-t bg-white mb-0 px-6 py-6">
					<div className="text-center flex justify-between">
						<h6 className="text-slate-700 text-xl font-bold">Settings</h6>
					</div>
				</div>
				<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
					<form>
						<h6 className="text-slate-400 text-lg underline mt-3 mb-6 font-bold uppercase">
							General Settings
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Email
									</label>
									<input
										type="email"
										disabled
										className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										placeholder="john@laybackandwin.com.au"
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4 lg:mb-2 my-auto">
								<button
									className="bg-slate-800 text-white w-full xl:w-1/3 active:bg-tw-purple-dark text-sm font-bold uppercase 
                px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  
                ease-linear transition-all duration-150"
									type="button"
								>
									Reset Password
								</button>
							</div>
						</div>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ">
								<span className="block uppercase text-slate-600 text-xs font-semibold mb-4">
									To change your email please contact support
								</span>
							</div>
						</div>

						<hr className="mt-6 border-b-1 border-slate-300" />

						<h6 className="text-slate-400 text-lg mt-3 mb-6 font-bold underline uppercase lg:mt-10">
							Twitch Account {String(authCheck)}
						</h6>

						<div className="flex flex-wrap text-center">
							<div className="w-full lg:w-4/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Account Status
									</label>
									<button
										className=" bg-tw-purple text-white  active:bg-tw-purple-dark text-sm font-bold uppercase 
                      px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full 
                      ease-linear transition-all duration-150"
										type="button"
										onClick={() => twitchAuthorize()}
									>
										Grant Access
									</button>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4">
								{/* <div className="relative w-full mb-3">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Balance
									</label>
									<p className="text-lg bold text-slate-800">$</p>
								</div> */}
							</div>
							<div className="w-full lg:w-4/12 px-4">
								{/* <div className="relative w-full mb-3">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									></label>
									<button
										className=" bg-slate-500 text-white  active:bg-slate-600 text-sm font-bold uppercase 
                        px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full 
                        ease-linear transition-all duration-150"
										type="button"
									>
										Revoke Betfair Account Access
									</button>
								</div> */}
							</div>
						</div>

						<hr className="mt-6 border-b-1 border-slate-300" />

						<h6 className="text-slate-400 text-lg mt-3 mb-6 font-bold underline uppercase lg:mt-10">
							Additional Settings
						</h6>
						{/* <div className="flex flex-wrap lg:mb-4 text-center">
							<div className="w-full lg:w-4/12 px-4 flex mb-12 lg:mb-4">
								<div className="relative w-full">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Activate/Deactivate Bot(s)
									</label>
									<div className="flex gap-x-4 pt-2 justify-center">
										<label className="relative inline-flex items-center cursor-pointer">
											<input type="checkbox" className="sr-only peer" />
											<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
											<span className="ml-3 uppercase text-slate-600 text-xs font-bold">
												LBW Bot
											</span>
										</label>
									</div>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4  mb-12 lg:mb-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2 underline"
										data-tooltip-target="stake-size"
									>
										Stake Size($AUD)
									</label>
									<div
										id="stake-size"
										role="tooltip"
										className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
									>
										Size of your stake that is placed on an order. In Australian
										Dollars($)
										<div className="tooltip-arrow" data-popper-arrow></div>
									</div>
									<input
										type="number"
										className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-1/4 text-center ease-linear transition-all duration-150"
									/>
								</div>
							</div>
							<div className="w-full flex flex-wrap lg:w-4/12 px-4">
								<div className="relative w-1/2 mb-3 justify-center">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Stop Loss Amount($AUD)
									</label>
									<input
										type="number"
										className="border-0 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-1/2 text-center ease-linear transition-all duration-150"
										max="0"
										min="-1000"
									/>
									<div id="stopLossWarning" className="hidden bg-red-400 px-1">
										<span>Stop loss must be less than or equal to zero</span>
									</div>
								</div>
								<div className="relative w-1/2 mb-3">
									<label
										className="block uppercase text-slate-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Target Profit Amount($AUD)
									</label>
									<input
										type="number"
										min="0"
										max="5000"
										className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-1/2 text-center ease-linear transition-all duration-150"
									/>
								</div>
							</div>
						</div> */}
						<hr className="mt-6 border-b-1 border-slate-300" />

						<div className="flex pt-4 justify-center">
							<div className="w-full lg:w-4/12 px-4">
								<button
									className="bg-slate-800 text-white active:bg-tw-purple text-sm font-bold uppercase 
                px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full 
                ease-linear transition-all duration-150"
									type="button"
								>
									Save Changes
								</button>
								{settingsSaved ? (
									<div className="w-full mt-2 py-2 rounded-md bg-green-300 text-center">
										<span className="text-center">
											Settings have been updated
										</span>
									</div>
								) : null}
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

type SettingsCardProps = {
	authCheck: boolean;
};

export { SettingsCard };
