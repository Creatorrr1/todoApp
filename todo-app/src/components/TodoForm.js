import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './css/todoForm.css'

function TodoForm (props) {
    const [text, setText] = useState('')

    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
    })

    const handleChange = e => {
        e.preventDefault();
        setText(e.target.value);
    }
    
    const handelSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: text
        });
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
            ref={ref}
            >
            </input>
        <button className='todo-button'>Add button</button>
        </form>
    )
}

export default TodoForm