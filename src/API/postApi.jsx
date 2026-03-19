import axios from "axios";
import { constantURL } from "./constant";

const api = axios.create({
    baseURL: constantURL,
})

export const getProductData = ({ pageNumber=1 }) => {
    let limits = 6;
    // https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
    return api.get(`/posts?_page=${pageNumber}&_limit=${limits}`);

}