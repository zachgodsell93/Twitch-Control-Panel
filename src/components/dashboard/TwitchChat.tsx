import React from "react";
import tmi from "tmi.js";

type TwitchChatProps = {
	channel: string;
};

const TwitchChat: React.FC<TwitchChatProps> = (props) => {
	const [status, setStatus] = React.useState<string>("disconnected");
	const [messages, setMessages] = React.useState<object>({});

	React.useEffect(() => {
		// const client = new tmi.Client({
		// 	identity: {
		// 		username: "dobstar93",
		// 		password: "oauth:xxxxxxxxxxxxxxxxxxxxxxx",
		// 	},
		// 	channels: [props.channel],
		// });
		// client.connect().catch(console.error);
		// client.on(
		// 	"message",
		// 	(channel: string, tags: any, message: string, self: boolean) => {
		// 		console.log(`${tags["display-name"]}: ${message}`);
		// 	}
		// );
		// client.on("connected", (address: string, port: number) => {
		// 	setStatus("connected");
		// 	console.log(`Twitch client connected`);
		// });
	}, []);

	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
				<div className="rounded-t mb-0 px-4 py-3 border-0">
					<div className="flex flex-wrap items-center">
						<div className="relative w-full px-4 max-w-full flex-grow flex-1">
							<h3 className="font-semibold text-base text-slate-700">
								Twitch Chat
							</h3>
						</div>
					</div>
				</div>

				<div className="block w-full overflow-x-auto">
					<div className="py-4 px-7">
						<h2 className="font-semibold text-base text-slate-700'">MP1</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export { TwitchChat };
