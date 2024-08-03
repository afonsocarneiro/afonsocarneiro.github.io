import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function read() {
	const [data, setData] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		axios
			.get('http://localhost:5173/users' + id)
			.then(res => setData(res.data))
			.catch(res => console.log(err));
	}, []);
	return <div></div>;
}

export default read;
