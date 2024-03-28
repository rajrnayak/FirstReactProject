import { useState } from "react";

function StoreStudent({ addStudentFromChild }) {
	const [student, setStudent] = useState({ id: null, first_name: "", last_name: "", age: "" });
	const [count, setCount] = useState(4);

	function saveStudentDetails(e) {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
			id: count,
		});
	}

	function setstate() {
		setStudent({
			id: null,
			first_name: "",
			last_name: "",
			age: "",
		});
		setCount((c) => c + 1);
	}

	function collectData() {
		addStudentFromChild(student);
		setstate();
	}
	return (
		<div className="d-flex justify-content-center pt-3">
			<div className="card col-4">
				<div className="card-body">
					<h1 className="text-center">Add Student</h1>
					<div className="">
						<form
							onSubmit={(event) => {
								event.preventDefault();
								collectData();
							}}>
							<div className="mb-3">
								<label htmlFor="first_name" className="form-label">
									First Name :
								</label>
								<input type="text" className="form-control" value={student.first_name} onChange={saveStudentDetails} name="first_name" id="first_name" />
							</div>
							<div className="mb-3">
								<label htmlFor="last_name" className="form-label">
									Last Name :
								</label>
								<input type="text" className="form-control" value={student.last_name} onChange={saveStudentDetails} name="last_name" id="last_name" />
							</div>
							<div className="mb-3">
								<label htmlFor="age" className="form-label">
									Age :
								</label>
								<input type="text" className="form-control" value={student.age} onChange={saveStudentDetails} name="age" id="age" />
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StoreStudent;
