// import { Card, Elevation } from '@blueprintjs/core';
import {useContext } from 'react'
import { Card } from 'react-bootstrap';
import './list.css';

import { SettingsContext } from '../../context/settings.js';

export default function list(props) {
	const { setting, setSetting } = useContext(SettingsContext);
	function handleClick(e) {
		setSetting({
			...setting,
			currPageNumber: e.target.id,
		});
	}

	function perPageHandleClick(e) {
		setSetting({
			...setting,
			perPage: e.target.id,
		});
	}

	const lastTodos = setting.currPageNumber * setting.perPage;
	const firstTodos = lastTodos - setting.perPage;
	const currentTodos = setting.list.slice(firstTodos, lastTodos);

	const pageNumbers = [];
	for (
		let i = 1;
		i <= Math.ceil(setting.list.length / setting.perPage);
		i++
	) {
		pageNumbers.push(i);
	}

	const renderPageNumbers = pageNumbers.map((number) => {
		return (
			<li
				className='renderPageNumbers'
				key={number}
				id={number}
				onClick={handleClick}
			>
				{number}
			</li>
		);
	});

	return (
		<>

    {renderPageNumbers.length ? 
    
			<div className='renderPerPageTopLevel'>
				Items to Display:
				<span 
        className='renderPerPage' 
        onClick={perPageHandleClick}
        id={3}
        >
					3
				</span>
				<span 
        className='renderPerPage' 
        onClick={perPageHandleClick}
        id={5}
        >
					5
				</span>
			</div>
        : ''}

			<div className='Card-toplevel'>
				{currentTodos.map((item) => (
          <Card className='CurrentTodos' key={item.id}>
						<Card.Body>
							<Card.Title>{item.text}</Card.Title>
							<Card.Text>
								<small>Assigned to: {item.assignee}</small>
							</Card.Text>
							<Card.Subtitle>
								<small>Difficulty: {item.difficulty}</small>
							</Card.Subtitle>
							<Card.Subtitle onClick={() => props.toggleComplete(item.id)}>
								Complete: {item.complete.toString()}
							</Card.Subtitle>
							<hr />
						</Card.Body>
					</Card>
				))}
			</div>

			<div>
				<ul className='page-numbers'>{renderPageNumbers}</ul>
			</div>
		</>
	);
}
