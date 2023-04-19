import React, { useState, useEffect } from "react";

const Chat = (props: ChatProps) => {
  // const tmi = require("tmi.js");

  // const client = new tmi.client({
  // 	options: { debug: true },
  // 	connection: {
  // 		reconnect: true,
  // 		secure: true,
  // 	},
  // 	identity: {
  // 		username: "dev_dojo_bot",
  // 		password: "o0mzqq1y92abk8p1e6bboo69nww5sm",
  // 	},
  // 	channels: ["dobstar93"],
  // });

  // client.connect();
  // client.on(
  // 	"message",
  // 	(channel: any, tags: Object, message: string, self: any) => {
  // 		if (self) return;

  // 		if (message.toLowerCase().length < 0) {
  // 			console.log(message);
  // 		}
  // 	}
  // );

  return (
    <div className="px-4 py-4 flex flex-wrap">
      <div className="border-0 w-full">Chat</div>
      <div className="w-full px-0 py-4">Test</div>
    </div>
  );
};

type ChatProps = {};

export { Chat };
