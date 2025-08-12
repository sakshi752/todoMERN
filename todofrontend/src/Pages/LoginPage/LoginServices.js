import { toast } from "react-toastify";
import { postService } from "../../ApiServices/PostApiService";
import { ENDPOINTS } from "../../utils";
// import { RegisterRequest, LoginRequest } from "./LoginModals";

export const registerUserService = async (requestBody) => {
    try {
        const response = await postService(`${ENDPOINTS.USER + ENDPOINTS.REGISTER}`,requestBody) 
    } catch (error) {
        console.log("error2",error);
        
        toast.error(error.message ? error.message : "Something went wrong")
    }
};

export const loginUserService = (requestBody) => {

};
