import React, {useState} from 'react';
import {pushTodo} from "../../redux/";
import {useDispatch} from "react-redux";

const Input = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const onInputChange = e => setInput(e.target.value);
    const pushTodoIntoList = () => dispatch(pushTodo(input, Math.random()));

    return (
        <div>
            <input type={'text'} onChange={e => onInputChange(e)} value={input}/>
            <button onClick={pushTodoIntoList}>Add</button>
        </div>
    );
};

export default Input;