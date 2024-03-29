import { useState } from "react";

function UpdateTask({ task, updateTask }) {
	const [object, setObject] = useState(task);
	function changeTask(event) {
		setObject({
			...object,
			[event.target.name]: event.target.value,
		});
	}
	return (
		<td>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					updateTask(object);
					setObject(null);
				}}>
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" name="task_name" value={object.task_name} onChange={changeTask} />
					<button className="btn btn-outline-primary" type="submit" id="button-addon2">
						Update
					</button>
				</div>
			</form>
		</td>
	);
}

export default UpdateTask;
