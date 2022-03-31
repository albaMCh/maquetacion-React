import {API_URL} from "../utils";

import axios from "axios";
import {Student} from "../models/Student";

class StudentDataService {
    getAll(queryParams) {
        return (
            axios
                .get(API_URL + "/students", {
                    params: queryParams,
                })
                .then((response) => {
                    return response.data.map((item) => {
                        return new Student(item);
                    });
                })
                // TODO: Remove this then block
                .then((data) => {
                    data = data.filter((item) => {
                        let condition = true;

                        if (!queryParams) return item;
                        if (queryParams.tags)
                            condition = condition && item.tags.includes(queryParams.tags);

                        if (queryParams.country)
                            condition = condition && item.country === queryParams.country;

                        if (queryParams.city)
                            condition = condition && item.city === queryParams.city;

                        if (queryParams.presence)
                            condition = condition && item.presence === queryParams.presence;

                        if (queryParams.move)
                            condition = condition && item.move === queryParams.move;

                        return condition;
                    });

                    return data;
                })
        );
    }

    get(id) {
        return axios.get(API_URL + "/students/" + id).then((response) => {
            return new Student(response.data);
        });
    }

    create(body) {
        return axios.post(API_URL + "/students", body);
    }

    uploadCV() {
        return axios.post(API_URL + "/files");
    }
}

export default new StudentDataService();
