import React, { useState } from 'react'

function TodoForm({ addTodo }) {
	const [item, setItem] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		if (item === '') return

		addTodo(item)

		setItem('')
	}

	return (
		<form onSubmit={handleSubmit} className="new-item-form">
			<label htmlFor="item" className="form-label">
				What do you need to do today?
			</label>
			<div className="form-row">
				<input
					value={item}
					onChange={e => setItem(e.target.value)}
					type="text"
					id="item"
				/>
				<button className="btn">Add</button>
			</div>
		</form>
	)
}

export default TodoForm
