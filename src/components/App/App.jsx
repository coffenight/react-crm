import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import PageAddBid from '../PageAddBid/PageAddBid';
import PageTable from '../PageTable/PageTable/PageTable';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<PageAddBid />} />
				<Route path="/table" element={<PageTable />} />
			</Routes>
		</Router>
	);
}

export default App;
