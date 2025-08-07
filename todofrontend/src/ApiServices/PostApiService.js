import { BASE_URL } from "../utils"

export const postData = async (endpoint, body = {}, headers = {}) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            }
        });
        if (!response.ok) {
      throw new Error(`POST Error: ${response.status}`);
    }
return await response;
    } catch (error) {
        console.error("internal server error")
    }
}