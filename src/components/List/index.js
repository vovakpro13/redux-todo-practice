import React from 'react';
import {useSelector} from "react-redux";
import Todo from "../Todo";

const List = () => {
    const todos = useSelector(state => state);
    console.log(todos);
    return (
        <div>
            {
                todos.map(({todo, id}) => <Todo text={todo} id={id}/>)
            }
        </div>
    );
}

export default List;