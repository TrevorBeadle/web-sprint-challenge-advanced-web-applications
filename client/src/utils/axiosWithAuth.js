import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:5000",
  });
};
