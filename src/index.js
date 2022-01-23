import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

class Main extends React.Component {
	render() {
		return (
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
