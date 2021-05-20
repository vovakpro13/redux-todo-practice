import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../redux";

const Todo = ({text, id}) => {
    const dispatch = useDispatch();

    const deleteCurrentTodo = () =>{
        dispatch(deleteTodo(id));
    }

    return (
        <div>
            <span>{text}</span>
            <button onClick={deleteCurrentTodo}>delete</button>
        </div>
    );
};

export default Todo;