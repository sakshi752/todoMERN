import { deleteService } from "../../ApiServices/DeleteApiService";
import { getService } from "../../ApiServices/GetApiService";
import { postService } from "../../ApiServices/PostApiService";
import { putService } from "../../ApiServices/PutApiService";
import { TodoAction } from "../../redux/Actions/TodoAction/TodoAction";
import { ENDPOINTS } from "../../utils";
import { toast } from "react-toastify";

export const getTodos = async (dispatch, token, id) => {
    try {
        const response = await getService(`${ENDPOINTS.TODOS}/${id}`, token)
        const data = await response.json();

        if (response.status === 200) {
            dispatch(TodoAction(data.data))
        }
    } catch (error) {
        toast.error("Internal server error!")
    }
}

export const addTodo = async (requestBody, dispatch, token) => {
    try {

        const response = await postService(`${ENDPOINTS.TODOS}`, requestBody, token);
        const data = await response.json();
        if (response.status === 200) {
            toast.success(data.message ? data.message : "Todo is added!")

        } else {
            toast.error(data.message ? data.message : "Something went wrong!")
        }

    } catch (error) {
        toast.error("Internal server error!")
    }
}

export const deleteTodo = async (todoId, token) => {
    try {
        // pass todoId in URL params
        const response = await deleteService(`${ENDPOINTS.TODOS}/${todoId}`, token);

        const data = await response.json();

        if (response.status === 200) {
            toast.success("Todo deleted successfully!");
        }
    } catch (error) {
        toast.error(error ? error : "Internal server error!");
    }
};


export const editTodo = async (reuqestBody, dispatch, token, id) => {
    try {
        const response = await putService(`${ENDPOINTS.TODOS}/${id}`, reuqestBody, token);
        const data = await response.json();
        if (response.status === 200 || data.message === "success") {
            toast.success(data.message ? data.message : "Todo is edited successfully!")

        } else {
            toast.error(data.message ? data.message : "Something went wrong!")
        }
    } catch (error) {
        toast.error("Internal server error!")
    }
} 