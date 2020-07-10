import axios from "axios";

export const READ_TMDbAPI = "READ_TMDbAPI";
//api.themoviedb.org/3/movie/550?api_key=
const ROOT_URL = "https://api.themoviedb.org/3/discover/movie?";
const APIKEY = "api_key=5ba450d095bb065f3e8766d5877e86eb";
const QUERYSTRING = "sort_by=popularity.desc";

export const readTMDbAPI = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}${APIKEY}&${QUERYSTRING}`);
  console.log(response);
  dispatch({ type: READ_TMDbAPI, response });
};
