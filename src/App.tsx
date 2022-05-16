import type { Component } from 'solid-js';
import styles from './App.module.css';
import DropDown from './components/DropDown';

const App: Component = () => {
	const items = [
		{
			title: 'Link',
			url: 'https://github.com/',
		},
		{
			title: 'Button',
			onClick: () => console.log("I'm Clicked"),
		},
	];
	return (
		<div class={styles.app}>
			<DropDown align='left' items={items} />
		</div>
	);
};

export default App;
