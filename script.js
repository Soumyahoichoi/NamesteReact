const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child1' }, [
		React.createElement('h1', { id: 'head' }, 'Hello World from React'),
		React.createElement('h2', { id: 'para' }, 'This is a paragraph')
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', { id: 'head' }, 'Hello World'),
		React.createElement('h2', { id: 'para' }, 'This is the second paragraph')
	])
]);

const heading = React.createElement('h1', { id: 'head' }, 'Hello World from React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
