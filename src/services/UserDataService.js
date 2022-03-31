import {API_URL} from "../utils";

import axios from "axios";

class UserDataService {
    login(body) {
        return axios.post(API_URL + "/login", body);
    }
}

export default new UserDataService();
