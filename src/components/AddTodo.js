import React from 'react'

const AddTodo = (props) => {

	function handleSubmit(event) {
		event.preventDefault()
		
		// check if value is not empty
		if( event.target.elements['todo'].value !== '') {
			// get value from the input
			props.add(event.target.elements['todo'].value)
			// clear input
			event.target.elements['todo'].value = ''
		}
	}

	return (
		<div className="todo-head">
			<h1>Add Todo</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" name="todo" placeholder="Type you todo"/>
				<button>Add Todo</button>
			</form>
		</div>
	)
}
export default AddTodo