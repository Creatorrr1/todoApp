import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import './css/todo.css'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, editTodos }) {
	const [edit, setEdit] = useState({
		id: null,
		value: '',
	})

	const changeTodo = (value) => {
		editTodos(edit.id, value)

		setEdit({
			id: null,
			value: '',
		})
	}

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={changeTodo} />
	}

	return todos.map((todo, index) => (
		<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.text}
			</div>
			<div className="icons">
				<RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
				<TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
			</div>
		</div>
	))
}

export default Todo
