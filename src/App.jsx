import { useState } from "react";
import ViewStudents from "./components/ViewStudents.jsx";
import StoreStudent from "./components/StoreStudent.jsx";
import UpdateStudent from "./components/UpdateStudent.jsx";

function App() {
	const [student, setStudent] = useState(null);
	const [students, setStudents] = useState([
		{ id: 1, first_name: "vinit", last_name: "barot", age: "24" },
		{ id: 2, first_name: "raj", last_name: "nayak", age: "23" },
		{ id: 3, first_name: "jay", last_name: "gajjar", age: "22" },
	]);

	function addStudent(student) {
		setStudents([...students, student]);
	}

	function deleteStudent(id) {
		setStudents(students.filter((s) => s.id !== id));
	}

	function editStudent(id) {
		students.map((student) => {
			if (student.id == id) {
				setStudent(student);
			}
		});
	}

	function updateStudent(student) {
		setStudents(
			students.map((stud) => {
				if (stud.id == student.id) {
					return student;
				} else {
					return { ...stud };
				}
			})
		);
		setStudent(null);
	}

	return (
		<>
			<div className="container">
				{student == null ? <StoreStudent addStudentFromChild={addStudent} /> : <UpdateStudent updateStudentFromChild={updateStudent} editStudent={student} />}
				{student == null && <ViewStudents students={students} deleteStudentFromChild={deleteStudent} editStudentFromChild={editStudent} />}
			</div>
		</>
	);
}

export default App;
