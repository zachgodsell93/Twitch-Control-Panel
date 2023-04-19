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
    "moderator:read:followers",
    "channel:read:subscriptions",
    "channel:read:redemptions",
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
