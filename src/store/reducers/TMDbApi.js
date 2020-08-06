import { READ_TMDbAPI } from "../actions/index";
import { GET_MOVIE_DETAIL } from "../actions/index";
import _ from "lodash";

export default (TMDbApi = {}, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      const data = action.response.data;
      return { ...TMDbApi, [data.id]: data };

    case READ_TMDbAPI:
      console.log(_.mapKeys(action.response.data.results, "id"));
      return _.mapKeys(action.response.data.results, "id");

    default:
      return TMDbApi;
  }
};
