import axios from "axios";
import {API_URL, BEARER_TOKEN} from "./constants";

export const axiosInstant = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": "Bearer "+BEARER_TOKEN
    }
});