import {PUSH_TODO, DELETE_TODO} from "../actionTypes";

export const pushTodo = (payload, id) => ({type: PUSH_TODO, payload, id});
export const deleteTodo = (id) => ({type: DELETE_TODO, id});