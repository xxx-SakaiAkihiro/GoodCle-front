import axios from "axios";

export const secureHTTP = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    "access-token": localStorage.getItem("access-token"),
     "client": localStorage.getItem("client"),
     "uid": localStorage.getItem("uid")
  }
});