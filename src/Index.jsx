import Card from "./components/Card.jsx";
import TotalToDo from "./components/TotalToDo.jsx";
import NewTaskForm from "./components/NewTaskForm.jsx";
import UpdateTask from "./components/UpdateTask.jsx";
import { useState } from "react";

let default_tasks = {
	id: 1,
	task_name: "My first task :)",
	status: false,
	flag: false,
};

function Index() {
	const [tasks, setTasks] = useState([default_tasks]);
	const [total, setTotal] = useState(1);
	const [complete, setComplete] = useState(0);
	const [pending, setPending] = useState(1);
	const [count, setCount] = useState(2);

	function addTask(task) {
		task.id = count;
		setTasks([...tasks, task]);
		setCount((c) => c + 1);
		setTotal((t) => t + 1);
		setPending((p) => p + 1);
	}

	function updateStatus(id) {
		setTasks(
			tasks.map((task) => {
				if (task.id == id) {
					if (task.status == false) {
						setComplete((c) => c + 1);
						setPending((p) => p - 1);
					} else {
						setComplete((c) => c - 1);
						setPending((p) => p + 1);
					}
					return { ...task, status: !task.status };
				} else {
					return task;
				}
			})
		);
	}

	function editTask(id) {
		setTasks(
			tasks.map((task) => {
				if (task.id == id) {
					return { ...task, flag: !task.flag };
				} else {
					return task;
				}
			})
		);
	}

	function updateTask(update_task) {
		setTasks(
			tasks.map((task) => {
				if (task.id == update_task.id) {
					return { ...task, task_name: update_task.task_name, flag: !task.flag };
				} else {
					return task;
				}
			})
		);
	}

	function deleteTask(id) {
		setTotal((t) => t - 1);
		setPending((p) => p - 1);
		setTasks(tasks.filter((task) => task.id !== id));
	}

	console.log(tasks);
	return (
		<Card>
			<TotalToDo count={{ total, complete, pending }} />
			<NewTaskForm addTask={addTask} />
			<table className="table">
				<thead>
					<tr>
						<th scope="col">No.</th>
						<th scope="col">finished</th>
						<th scope="col">Todo item</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task, index) => (
						<tr key={index}>
							<th>{index + 1}</th>
							<td>
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox1"
									checked={task.status}
									onChange={() => {
										updateStatus(task.id);
									}}
								/>
							</td>
							{task.flag == false ? <td>{task.status == true ? <del>{task.task_name}</del> : task.task_name}</td> : <UpdateTask task={task} updateTask={updateTask} />}
							<td>
								{task.status == false && (
									<div className="btn-group" role="group">
										<button
											type="button"
											className="btn btn-outline-success"
											onClick={() => {
												editTask(task.id);
											}}>
											Edit
										</button>
										<button
											type="button"
											className="btn btn-outline-danger"
											onClick={() => {
												deleteTask(task.id);
											}}>
											Delete
										</button>
									</div>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Card>
	);
}

export default Index;
