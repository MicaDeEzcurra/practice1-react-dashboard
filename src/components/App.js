import React from 'react';

// Components
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Card from './Card';
import LastProduct from './LastProduct';
import Categories from './Categories';
import Footer from './Footer';

// Data for Card component -- coded here due to lack of API
const cardData = [
	{
		borderColor: "border-left-primary",
		title: "Products in Data Base",
		content: "135",
		icon: "fa-clipboard-list",
	},

	{
		borderColor: "border-left-success",
		title: "Amount in products",
		content: "$546.456",
		icon: "fa-dollar-sign",
	},

	{
		borderColor: "border-left-warning",
		title: "Users quantity",
		content: "38",
		icon: "fa-user-check",
	},
];

// Data for Ca

function App() {
	return (
		<div id="wrapper">
			{/* Sidebar */}
			<Sidebar />

			<div id="content-wrapper" className="d-flex flex-column">
			
      	{/* Main Content */}
				<div id="content">

					{/* Topbar */}
					<Topbar />

					{/* Page Content */}
					<div className="container-fluid">

						{/* Page Heading */}
						<div className="d-sm-flex align-items-center justify-content-between mb-4">
							<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
						</div>

						{/* Content Row */}
						<div className="row">
							{cardData.map((oneCard, idx) => {
								return <Card key={idx} cardInfo={oneCard} />;
							})}
						</div>

						{/* Content Row */}
						<div className="row">

                            {/* Last Product in DB */}
                            <LastProduct />

                            {/* Categories in DB */}
                            <Categories />
                        </div>
					</div>
				</div>

                {/* Footer */}
                <Footer />

			</div>
		</div>
	);
}

export default App;
