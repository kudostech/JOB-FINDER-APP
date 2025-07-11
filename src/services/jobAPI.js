import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchJobs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.products;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
};
