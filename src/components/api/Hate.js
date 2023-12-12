export const Hate = async (term) => {
	const response = await fetch('https://103.84.207.4:8000/hate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query: term }),
	});

	const data = await response.json();
	return data;
};
