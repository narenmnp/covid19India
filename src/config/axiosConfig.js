import axios from 'axios';
import { API_URL } from "./apiBaseConfig";

export const HTTP_SERVER_URL = axios.create({
    baseURL: API_URL
});