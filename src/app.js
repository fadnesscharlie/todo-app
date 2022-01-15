import React from 'react';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo.js';
import SettingsContext from './context/settings.js';

export default function app() {
  return (
		<SettingsContext>
			<ToDo />
		</SettingsContext>
	);
}
