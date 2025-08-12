import { toast } from "react-toastify";
// import { RegisterRequest, LoginRequest } from "./LoginModals";

export const registerUserService = (requestBody) => {
    try {

    } catch (error) {
        toast.error(error.message ? error.message : "Something went wrong")
    }
};

export const loginUserService = (requestBody) => {

};
