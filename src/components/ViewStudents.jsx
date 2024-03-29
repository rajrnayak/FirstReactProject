function ViewStudents({ students, deleteStudentFromChild, editStudentFromChild }) {
	console.log(students);
	return (
		<table className="table mt-2">
			<thead>
				<tr>
					<th scope="col">Sr.No</th>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Age</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody className="table-group-divider">
				{students.map((student, index) => (
					<tr key={index}>
						<th scope="row">{index + 1}</th>
						<td>{student.first_name}</td>
						<td>{student.last_name}</td>
						<td>{student.age}</td>
						<td>
							<div className="btn-group" role="group" aria-label="Basic outlined example">
								<button
									type="button"
									className="btn btn-outline-success"
									onClick={() => {
										editStudentFromChild(student);
									}}>
									Edit
								</button>
								<button
									type="button"
									className="btn btn-outline-danger"
									onClick={() => {
										deleteStudentFromChild(student.id);
									}}>
									Delete
								</button>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default ViewStudents;
