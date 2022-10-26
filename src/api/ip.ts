import axios from "axios";

export const fetchIP = () => {
  return axios.get("https://ipinfo.io", {
    params: { token: import.meta.env.VITE_IPINFO_TOKEN },
  });
};
