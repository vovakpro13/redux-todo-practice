import {PUSH_TODO, DELETE_TODO} from "../actionTypes";

const todoReducer = (state = [], action) => {
    switch (action.type){
        case PUSH_TODO:
            return [...state, {todo: action.payload, id: action.id}];
        case DELETE_TODO:
            return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
}

export default todoReducer;