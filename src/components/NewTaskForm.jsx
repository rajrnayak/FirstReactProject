import { useState } from "react";

let object = { id: null, task_name: "", status: false, flag: false };

function NewTaskForm({ addTask }) {
	const [task, setTask] = useState(object);

	function changeTask(event) {
		setTask({
			...task,
			[event.target.name]: event.target.value,
		});
	}

	return (
		<form
			className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
			onSubmit={(event) => {
				event.preventDefault();
				addTask(task);
				setTask(object);
			}}>
			<div className="col-12 pt-1">
				<label htmlFor="form1">
					<h5>Enter a new task :</h5>
				</label>
			</div>
			<div className="col-12">
				<div className="form-outline">
					<input type="text" id="form1" className="form-control" name="task_name" value={task.task_name} onChange={changeTask} />
				</div>
			</div>

			<div className="col-12">
				<button type="submit" className="btn btn-primary">
					Add
				</button>
			</div>
		</form>
	);
}

export default NewTaskForm;
