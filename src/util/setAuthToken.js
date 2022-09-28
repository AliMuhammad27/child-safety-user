import axios from "axios";
export const setAuthToken = (token) => {
  if (token) {
    console.log("TOken");
    axios.defaults.headers.common["Authorization"] = token;
    // axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    console.log("Not Token");
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
