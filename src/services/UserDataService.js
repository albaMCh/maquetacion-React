import { API_URL } from "../utils";

import axios from "axios";

class UserDataService {
  login(body) {
    return axios.post(API_URL + "/security/oauth/token", body);
  }
}

export default new UserDataService();
