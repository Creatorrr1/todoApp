import React from 'react';
import { useState } from 'react';

function TodoForm () {
    const [text, setText] = useState('')

    const handleChange = e => {
        e.preventDefault();
        setText(e.target.value);
    }
    
    const handelSubmit = e => {
        e.preventDefault();
        setText('')
    }
    
    return (
        <form className='todo-form' onSubmit={handelSubmit}>
            <input 
            type='text' 
            placeholder='Add Todo' 
            value={text} name='text' 
            className='todo-input'
            onChange={handleChange}
            >
            </input>
        <button className='todo-button'>Add button</button>
        </form>
    )
}

export default TodoForm