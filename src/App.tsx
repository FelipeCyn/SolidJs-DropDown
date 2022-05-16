import styles from './App.module.css';
import DropDown from './components/DropDown';

const App = () => {
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
