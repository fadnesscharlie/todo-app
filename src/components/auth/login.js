import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [capability, setCapability] = useState('');

	const state = useContext(AuthContext);

	const handleChangeUsername = (e) => {
		setUsername(e.target.value);
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleClickCapability = (e) => {
		console.log('e.target.values:', e.target.value);
		setCapability(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('capability:', capability);
		state.login(username);
	};

	let loginDisplay = state.loggedIn ? (
		<button onClick={state.logout}>Logout</button>
	) : (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='UserName'
				name='username'
				id='username-input'
				onChange={handleChangeUsername}
			/>
			<input
				placeholder='password'
				name='password'
				id='password-input'
				onChange={handleChangePassword}
			/>
			<DropdownButton
				id='dropdown-basic-button'
				title='Dropdown button'
				variant='success'
			>
				<Dropdown.Item value='read' onClick={() => setCapability('read')}>
					Reader
				</Dropdown.Item>
				<Dropdown.Item value='writer' onClick={() => setCapability('writer')}>
					Writer
				</Dropdown.Item>
				<Dropdown.Item value='updater' onClick={() => setCapability('editor')}>
					Updater
				</Dropdown.Item>
				<Dropdown.Item value='admin' onClick={() => setCapability('admin')}>
					Admin
				</Dropdown.Item>
			</DropdownButton>

			<button>Login</button>
		</form>
	);

	return <div>{loginDisplay}</div>;
}
