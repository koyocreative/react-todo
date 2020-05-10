import React from 'react'

const TodoItem = (props) => {

	function handleChange() {
		const { id, complete } = props.todo 
		props.handleChange(id, complete)
	}

	function removeTodo() {
		const { id } = props.todo
		props.removeTodo(id)
	}
	
	return (
		<div className={props.todo.complete ? 'todo-item complete' : 'todo-item'}>
			
			<div className="todo-content">
				<input
					type="checkbox"
					onChange={handleChange}
					checked={props.todo.complete}
				/>
				<div className="todo-text">{props.todo.text}</div>
			</div>
			
			<div className="todo-remove" onClick={removeTodo}> &times; </div>

		</div>
	)
}
export default TodoItem