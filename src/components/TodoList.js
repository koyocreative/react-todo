import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
	console.log(todos)

	return (
		<div>
			<h1>Todo List</h1>
			{Object.keys(todos).map(key => <TodoItem key={key} item={todos[key]}  /> )}
		</div>
	)
}
export default TodoList