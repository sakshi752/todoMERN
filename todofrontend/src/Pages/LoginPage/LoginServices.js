// import { toast } from "react-toastify";
import { toast } from "react-toastify";
import { postService } from "../../ApiServices/PostApiService";
import { ENDPOINTS } from "../../utils";
// import { RegisterRequest, LoginRequest } from "./LoginModals";

export const registerUserService = async (requestBody) => {
    try {
        const response = await postService(`${ENDPOINTS.USER + ENDPOINTS.REGISTER}`, requestBody)
        const data = await response.json();
        if (response.status === 200) {
            toast.error(data.message ? data.message : "User is registered!")
        } else {
            toast.error(data.message ? data.message : "Something went wrong!")
        }

    } catch (error) {
        toast.error("Internal server error!")
    }
};

export const loginUserService = (requestBody) => {

};
