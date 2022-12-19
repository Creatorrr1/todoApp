import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
	const [todos, setTodos] = useState([])

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return
		}

		const newTodos = [todo, ...todos]

		setTodos(newTodos)

		console.log('currentTodoAdded =>', todo, 'AllTodo =>', ...todos)
	}

	const removeTodo = (id) => {
		const keepArr = [...todos].filter((todo) => todo.id !== id)

		setTodos(keepArr)
	}

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete
			}
			return todo
		})
		setTodos(updatedTodos)
	}

	const editTodos = (todoId, updatedTodo) => {
		if (!updatedTodo.text || /^\s*$/.test(updatedTodo.text)) {
			return
		}

		setTodos((prevTodos) => prevTodos.map((item) => (item.id === todoId ? updatedTodo : item)))
	}

	return (
		<div>
			<h1>Today's Agenda</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodos={editTodos} />
		</div>
	)
}

export default TodoList
