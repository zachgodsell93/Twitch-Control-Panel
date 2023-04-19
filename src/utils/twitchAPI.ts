import axios from "axios";

import type { pollTypes } from "./twitchAPITypes";

const createPoll: Function = (props: pollTypes) => {
  // let username:string = process.env.USERNAME
  // let token:string = process.env.TOKEN
  // console.log(username, token)
};

const getbroadcastId: Function = async () => {
  // let username:string = process.env.USERNAME
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const token = process.env.REACT_APP_TOKEN;

  const config: object = {
    method: "GET",
    headers: {
      "Client-ID": clientId,
      Authorization: `Bearer ${token}`,
    },
    url: "https://api.twitch.tv/helix/users?login=dobstar93",
  };

  axios(config)
    .then((res) => {
      console.log(res.data.data[0]);
      return res.data.data[0].id;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getFollowers: Function = async () => {
  // let username:string = process.env.USERNAME
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const token = process.env.REACT_APP_TOKEN;
  const broadcasterId = process.env.REACT_APP_USER_ID;

  const config: object = {
    method: "GET",
    headers: {
      "Client-ID": clientId,
      Authorization: `Bearer ${token}`,
    },
    url: "https://api.twitch.tv/helix/channels/followers",
    params: {
      broadcaster_id: broadcasterId,
    },
  };

  const res = await axios(config);

  return res.data;
};

const getSubscribers: Function = async () => {
  // let username:string = process.env.USERNAME
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const token = process.env.REACT_APP_TOKEN;
  const broadcasterId = process.env.REACT_APP_USER_ID;

  const config: object = {
    method: "GET",
    headers: {
      "Client-ID": clientId,
      Authorization: `Bearer ${token}`,
    },
    url: "https://api.twitch.tv/helix/subscriptions",
    params: {
      broadcaster_id: broadcasterId,
    },
  };

  const res = await axios(config);

  return res.data;
};

export { createPoll, getFollowers, getbroadcastId, getSubscribers };
