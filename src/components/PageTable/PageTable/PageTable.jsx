import { useState, createContext, useEffect } from 'react';
import { serverPath } from '../../../helpers/variables';
import LeftPanel from '../LeftPanel/LeftPanel';
import Table from '../Table/Table';

export const AppContext = createContext(null);

const PageTable = () => {
	const [status, setStatus] = useState('all');
	const [bids, setBids] = useState(null);

	useEffect(() => {
		fetch(`${serverPath}/bids`)
			.then((res) => res.json())
			.then((data) => {
				setBids(data);
			});
	}, []);


	return (
		<div className="with-nav body--dashboard">
			<AppContext.Provider value={{ status, setStatus, bids }}>
				<LeftPanel />
				<Table />
			</AppContext.Provider>
		</div>
	);
};

export default PageTable;
