import React from 'react';
import ReactDOM from 'react-dom/client';

// Header
//  - Logo
//  - Nav Items
// Body
//  - Searchbar
//  - ResturantLayout
//    - Resturant Card
// Footer
//  - Copyright
//  - Contact
//  - Links
//  - Address

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5D4WfoF7fNZiuXioF542llLsaV53fyoPvqg&usqp=CAU"
					alt="logo"
				/>
			</div>
			<div className="nav-items-container">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className="app-layout">
			{/* Header
   Body
   Footer */}
			<Header />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />);
