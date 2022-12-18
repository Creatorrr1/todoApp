import React from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList () {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)

        console.log('currentTodoAdded =>', todo ,'AllTodo =>', ...todos)
    }


    return (
        <div>
            <h1>Today's Agenda</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList