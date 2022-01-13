import React, { useEffect, useContext } from 'react';
import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';
import { SettingsContext } from '../../context/settings.js';

const ToDo = () => {
  const { setting, setSetting } = useContext(SettingsContext);


  // const [list, setList] = useState([]);
  // const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setSetting({
      ...setting,
      list: item
    })
    // props.list.push(item)
    // setList([...list, item]);
  }

  function deleteItem(id) {
    const items = setting.list.filter( item => item.id !== id );
    setSetting({
      ...setting,
      list: items
    })
  }

  function toggleComplete(id) {

    const items = setting.list.map( item => {
      if ( item.id == id ) {
        item.complete != item.complete;
      }
      return item;
    });
    setSetting({
      ...setting,
      list: items
    })

  }

  useEffect(() => {
    let incompleteCount = setting.list.filter(item => !item.complete).length;
    setSetting({
      ...setting,
      incomplete: incompleteCount
    })
    document.title = `To Do List: ${setting.incomplete}`;
  }, [list]);

  return (
    <>
      <header>
        <h1>To Do List: {setting.incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      {setting.list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

    </>
  );
};

export default ToDo;
