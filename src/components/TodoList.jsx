import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<ul className="list">
			{todos.length > 0
				? todos.map(todo => {
						return (
							<TodoItem
								{...todo}
								key={todo.id}
								toggleTodo={toggleTodo}
								deleteTodo={deleteTodo}
							/>
						)
				  })
				: 'No Todos'}
		</ul>
	)
}

export default TodoList
