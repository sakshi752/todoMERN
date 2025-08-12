import { BASE_URL } from "../utils";
import { toast } from "react-toastify";

export const postService = async (endpoint, body = {}, headers = {}) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            }
        });
        console.log("res ", response)
        if (!response.ok) {
            throw new Error(`POST Error: ${response.status}`);
        }
        return await response;
    } catch (error) {
    console.error("Fetch error:", error);
    toast.error(error?.message || "Internal Server Error");
}
}