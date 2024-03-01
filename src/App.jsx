import { useState } from 'react';
import { USERS } from './constants/users';

const App = () => {
	const users = USERS;
	const [firstValue, setFirstValue] = useState(0);
	const [optionValue, setOptionValue] = useState(1);

	const [pages, setPages] = useState(1);
	console.log('numero de paginas', pages);
	console.log(optionValue);

	const pagedUsers = users.slice(firstValue, optionValue);

	return (
		<>
			<select onClick={event => checkValue(event, setOptionValue)}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
			</select>

			<button onClick={prevPage}>prev</button>
			<p>{pages}</p>
			<button
				onClick={() =>
					nextPage(
						optionValue,
						users.length,
						setPages,
						setFirstValue,
						setOptionValue
					)
				}
			>
				next
			</button>

			<h1>usuarios paginados</h1>
			{pagedUsers.map(user => (
				<div key={user.userId}>
					<img src={user.profileImage} alt='' />
					<p>{user.name}</p>
				</div>
			))}
		</>
	);
};
const checkValue = (event, setOptionValue) => {
	setOptionValue(event.target.value);
};
const prevPage = () => {};
const nextPage = (
	optionValue,
	usersLength,
	setPages,
	setFirstValue,
	setOptionValue
) => {
	const numberOfPages = usersLength / optionValue;
	const totalNumberOfPages = Math.ceil(numberOfPages);
	setPages(totalNumberOfPages);
};

export default App;
