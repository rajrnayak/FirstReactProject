function Counter({ count, click }) {
	return (
		<div>
			<br />
			<button onClick={click}>Count : {count}</button>
		</div>
	);
}
export default Counter;
