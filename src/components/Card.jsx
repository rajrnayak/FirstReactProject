function Card({ children }) {
	return (
		<section className="vh-100" style={{ backgroundColor: "#eee" }}>
			<div className="container py-3">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="card rounded-3">
						<div className="card-body p-4">
							<h4 className="text-center my-3 pb-3">To Do App</h4>
							{children}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Card;
