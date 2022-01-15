'use strict';
import { useState, createContext } from 'react';

export const SettingsContext = createContext({});

function settingsProvider(props) {
	const [ setting, setSetting ] = useState({
		list: [],
		incomplete: [],
		values: {},
    display: 3,
    sort: [],
	});

  return(
    <SettingsContext.Provider value={{ setting, setSetting }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default settingsProvider;
