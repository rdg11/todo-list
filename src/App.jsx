import { useEffect, useState } from 'react'
import './styles.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default function App() {
	// useState is checking local storage and getting the value if it exists
	// it no value exists, it defaults to an empty array
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem('ITEMS')
		if (localValue == null) return []

		return JSON.parse(localValue)
	})

	// every time the todos is modified, save todos in localStorage
	useEffect(() => {
		localStorage.setItem('ITEMS', JSON.stringify(todos))
	}, [todos])

	function addTodo(title) {
		setTodos(prevTodos => {
			return [
				...prevTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			]
		})
	}

	function toggleTodo(id, completed) {
		setTodos(prevTodos => {
			// returning a new list of todos that has this todo checked!
			return prevTodos.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed } // creating brand new todo, changing one property on it
				}

				return todo
			})
		})
	}

	function deleteTodo(id) {
		setTodos(prevTodos => {
			// returning a new list of todos that does not include this deleted todo
			return prevTodos.filter(todo => todo.id !== id)
		})
	}

	console.log(todos)

	return (
		<div className="container">
			<TodoForm addTodo={addTodo} />
			<h1 className="header">TODO List</h1>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</div>
	)
}
