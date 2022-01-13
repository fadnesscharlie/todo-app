import React, { useContext } from 'react';

import ToDo from './components/todo/todo.js';
import { SettingsContext } from './context/settings.js';

export default class App extends React.Component {
  
  render() {
    const { setting, setSetting } = useContext(SettingsContext)
    return (
      <SettingsContext.Provider value={{setting, setSetting}}>
        <ToDo />
      </SettingsContext.Provider>
    );
  }
}
