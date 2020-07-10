import { READ_TMDbAPI } from "../actions/index";
import _ from "lodash";

export default (TMDbApi = {}, action) => {
  switch (action.type) {
    case READ_TMDbAPI:
      console.log(_.mapKeys(action.response.data.results, "id"));
      return _.mapKeys(action.response.data.results, "id");

    default:
      return TMDbApi;
  }
};
