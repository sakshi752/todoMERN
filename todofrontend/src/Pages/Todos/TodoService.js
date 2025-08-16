import { ENDPOINTS } from "../../utils";

export const addTodo = async (requestBody, dispatch) => {
    try {
        const response = await postService(`${ENDPOINTS.TODO}`, requestBody);
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

export const deleteTodo = async (reuqestBody, dispatch) => { }

export const editTodo = async (reuqestBody, dispatch) => { } 