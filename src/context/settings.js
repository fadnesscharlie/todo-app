'use strict';
import { useState, createContext } from 'react';

export const SettingsContext = createContext({});

function settingsProvider(props) {
	const [ setting, setSetting ] = useState({
		list: [],
		incomplete: [],
		values: {},
    currPageNumber: 1,
    perPage: 3,
    sort: [],
    complete: []
	});

  return(
    <SettingsContext.Provider 
    value={{ setting, setSetting }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default settingsProvider;
