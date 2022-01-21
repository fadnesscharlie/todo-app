import './header.css'
import { useContext } from 'react';

import { SettingsContext } from '../../context/settings.js';

export default function header(props) {
  const { setting } = useContext(SettingsContext);
  return (
    <header>
      <h1>Welcome to Charlie's ToDo App!</h1>
    
				<h2>To Do List: {setting.incomplete} items pending</h2>
			</header>
  )
}
