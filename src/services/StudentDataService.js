import { API_URL } from "../utils";

import axios from "axios";

class StudentDataService {
  getAll(queryParams) {
    return axios
      .get(API_URL + "/students/student", {
        params: queryParams,
      })
      .then((response) => response.json());
  }

  get(id) {
    return axios.get(API_URL + "/students/student/" + id);
  }

  create(body) {
    return axios.post(API_URL + "/students/student", body);
  }
}

export default new StudentDataService();
