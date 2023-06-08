import React from 'react'

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
	return (
		<li>
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={e => toggleTodo(id, e.target.checked)}
				/>
				<div className="list-title">{title}</div>
			</label>
			<button onClick={() => deleteTodo(id)} className="btn btn-danger">
				✖
			</button>
		</li>
	)
}

export default TodoItem
