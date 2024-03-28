import { useState } from "react";

const Students_list = [
	{ name: "raj", age: 22 },
	{ name: "jay", age: 23 },
	{ name: "harsh", age: 24 },
	{ name: "vinit", age: 25 },
];

function List() {
	const [show_list, setShowList] = useState(false);

	function showAndHide() {
		setShowList(!show_list);
	}

	return (
		<>
			<button onClick={showAndHide}>{show_list == false ? "Show list" : "hide list"}</button>
			{show_list && (
				<>
					<h1>This is a List.</h1>
					<ul>
						{Students_list.map((student) => (
							<li key={student.age} style={{ color: student.age <= 23 ? "green" : "red" }}>
								{student.name}
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
}

export default List;
