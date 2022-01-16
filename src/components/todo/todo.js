import React, { useEffect, useContext } from 'react';

import useForm from '../../hooks/form.js';
import Form from '../form/form.js'
import List from '../list/list.js'
import Header from '../header/header.js'
import Footer from '../footer/footer.js';

import { v4 as uuid } from 'uuid';
import { SettingsContext } from '../../context/settings.js';

const ToDo = () => {
	const { setting, setSetting } = useContext(SettingsContext);

	const { handleChange, handleSubmit } = useForm(addItem);

	function addItem(item) {
		console.log(item);
		item.id = uuid();
		item.complete = false;
		setSetting({
			...setting,
			list: [...setting.list, item],
		});
	}

	function deleteItem(id) {
		const items = setting.list.filter((item) => item.id !== id);
		setSetting({
			...setting,
			list: items,
		});
	}

	function toggleComplete(id) {
		const items = setting.list.map((item) => {
			if (item.id == id) {
				item.complete ? item.complete = false : item.complete = true;
			}
			return item;
		});
		setSetting({
			...setting,
			list: items,
		});
	}

	useEffect(() => {
		let incompleteCount = setting.list.filter((item) => !item.complete).length;
		console.log('setting.list:', setting);
		setSetting({
			...setting,
			incomplete: incompleteCount,
		});
		document.title = `To Do List: ${setting.incomplete}`;
	}, [setting.list]);
	return (
		<>
      <Header 
        setting={setting} 
      />

			<Form 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />

      <List 
        setting={setting}
        setSetting={setSetting} 
        toggleComplete={toggleComplete} 
      />

      <Footer />
		</>
	);
};

export default ToDo;
