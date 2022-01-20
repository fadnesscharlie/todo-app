import React from 'react';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import ToDo from './components/todo/todo.js';
import SettingsContext from './context/settings.js';
import AuthProvider from './context/authContext';
import Login from './components/auth/login';
import Auth from './components/auth/auth';

export default function app() {
	return (
		<>
			<AuthProvider>

					<h1>Login and Auth</h1>
					<Login />
					<Auth capability='read'>
						<div>Any valid user can see this</div>
					</Auth>
					<Auth capability='create'>
						<div>Users with create access can see this</div>
						<div className='app'>
							<SettingsContext>
								<ToDo />
							</SettingsContext>
						</div>
					</Auth>
					<Auth capability='update'>
						<div>Users with update access can see this</div>
						<div className='app'>
							<SettingsContext>
								<ToDo />
							</SettingsContext>
						</div>
					</Auth>
					<Auth capability='delete'>
						<div>Users with delete access can see this</div>
						<div className='app'>
							<SettingsContext>
								<ToDo />
							</SettingsContext>
						</div>
					</Auth>

			</AuthProvider>
		</>
	);
}
