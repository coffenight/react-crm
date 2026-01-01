import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import PageAddBid from '../PageAddBid/PageAddBid';
import PageTable from '../PageTable/PageTable/PageTable';
import EditPage from '../EditPage/EditPage/EditPage.jsx';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<PageAddBid />} />
				<Route path="/table" element={<PageTable />} />
				<Route path="/edit/:id" element={<EditPage />} />
			</Routes>
		</Router>
	);
}

export default App;
