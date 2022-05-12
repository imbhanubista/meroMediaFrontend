import axios from "axios";
import store from "../store";
export const baseUrl = "http://localhost:3000";

export const unAuthApi = async (method, url, data) => {
  let response = await axios({
    method,
    url: baseUrl + "/api/" + url,
    data,
  });
  return response.data;
};

export const authenticatedApi = async (method, url, data) => {
  let selector = store.getState().reducer;
  let response = await axios({
    method,
    url: baseUrl + "/api/" + url,
    data,
    headers: {
      authorization: "Bearer " + selector.token,
    },
  });
  return response.data;
};

// 2
