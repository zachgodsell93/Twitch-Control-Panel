import axios from "axios";

interface User {
  email: string;
  uid: string;
  twitchBroadcasterId: string;
}

export class UserAPI {
  private static baseURL: string = "http://localhost:3333/";

  static async createUser(user: User) {
    const config = {
      method: "post",
      headers: {},
      baseURL: UserAPI.baseURL,
      url: "/users/create_user",
      data: user,
    };
    const response = await axios(config);
    return response.data;
  }

  static async updateUser(uid: string, data: {}) {
    console.log("This is the data going to the API");
    console.log(data);
    const config = {
      method: "post",
      headers: {},
      baseURL: UserAPI.baseURL,
      url: `/users/update_user/${uid}`,
      data: data,
    };
    const response = await axios(config);
    return response.data;
  }
}
