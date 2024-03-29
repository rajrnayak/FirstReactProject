function TotalToDo({ count }) {
	return (
		<div className="container mb-4">
			<div className="row justify-content-md-center">
				<div className="col col-lg-3 border border-black m-1 p-2">Total To-Do : {count.total}</div>
				<div className="col col-lg-3 border border-black m-1 p-2">Total Completed To-Do : {count.complete}</div>
				<div className="col col-lg-3 border border-black m-1 p-2">Total Panding To-Do : {count.pending}</div>
			</div>
		</div>
	);
}

export default TotalToDo;
