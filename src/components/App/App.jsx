import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import PageAddBid from '../PageAddBid/PageAddBid';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<PageAddBid />} />
			</Routes>
		</Router>
	);
}

export default App;
