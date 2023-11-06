import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => <h1 id="title">Nameste React </h1>;

const name = 'Soumya Chakraborty';
const Header = () => (
	<>
		{Title()}
		<h2 className="head">Hello from React Functional Component!</h2>
	</>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Header());
