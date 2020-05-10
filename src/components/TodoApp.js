import React from 'react'
import AddTodo  from './AddTodo'
import TodoItem  from './TodoItem'


class TodoApp extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  		todos: [
				{ id: 1, text: 'Buy Milk', complete: false },
				{ id: 2, text: 'Piano Lessions', complete: false },
				{ id: 3, text: 'Learn Redux', complete: false },
				{ id: 4, text: 'Node.js is confusing', complete: true }
			]
	  }

	  this.handleToggle = this.handleToggle.bind(this)
	  this.removeTodo = this.removeTodo.bind(this)
	  this.addTodo = this.addTodo.bind(this)
	}

	componentDidMount() { 
		const loc = localStorage.getItem('todos')
		this.setState({todos: JSON.parse(loc)})
	}

	componentWillUpdate() {
		localStorage.setItem('todos', JSON.stringify(this.state.todos))
	}

	componentWillUnmount() {
		localStorage.setItem('todos', JSON.stringify(this.state.todos))
	}
	


	addTodo(todo) {
		const newTodos = [...this.state.todos]
		newTodos.push({ id: Date.now(), text: todo, complete: false })
		this.setState({ todos: newTodos })
	}

	removeTodo(id) {
		const todos = this.state.todos.filter( item => item.id !== id)
		this.setState({ todos })
	}

	handleToggle(id, complete) {
		const newState = {...this.state}
		newState.todos.find( todo => todo.id === id).complete = !complete
		this.setState({...newState})


	}

	render() {
		return(
			<div className="todo-app">
				<AddTodo add={this.addTodo} />
				
				{this.state.todos.map( item => (
					<TodoItem
						key={item.id}
						todo={item}
						handleChange={this.handleToggle}
						removeTodo={this.removeTodo}
					/>
				))}
			</div>
		)
	}
}
export default TodoApp