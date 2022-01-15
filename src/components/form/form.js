'use strict';

import Button from 'react-bootstrap/Button';

export default function form(props) {
	return (
		<form className='bp3-form-group .modifier' onSubmit={props.handleSubmit}>
			<h2 className='bp3-form-content'>Add To Do Item</h2>

			<label className='bp3-label' for='form-group-input'>
				<span className='bp3-form-helper-text'>To Do Item</span>
				<input
					className='bp3-input'
					onChange={props.handleChange}
					name='text'
					type='text'
					placeholder='Item Details'
				/>
			</label>

			<label className='bp3-label' for='form-group-input'>
				<span className='bp3-form-helper-text'>Assigned To</span>
				<input
					className='bp3-input'
					onChange={props.handleChange}
					name='assignee'
					type='text'
					placeholder='Assignee Name'
				/>
			</label>

			<label className='bp3-label' for='form-group-input'>
				<span className='bp3-form-helper-text'>Difficulty</span>
				<input
					className='bp3-input'
					onChange={props.handleChange}
					defaultValue={3}
					type='range'
					min={1}
					max={5}
					name='difficulty'
				/>
			</label>

			<label  for='form-group-input'>
				<Button 
					variant="outline-primary"  
					type='submit'
					
				>Add Item</Button>
			</label>
		</form>
	);
}
