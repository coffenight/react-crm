import { createContext, useEffect, useState } from 'react';
import { serverPath } from '../../../helpers/variables';
import LeftPanel from '../LeftPanel/LeftPanel';
import Table from '../Table/Table';

export const AppContext = createContext(null);

const PageTable = () => {
	const [status, setStatus] = useState(
		localStorage.getItem('status') ? localStorage.getItem('status') : 'all',
	);
	const [product, setProduct] = useState(
		localStorage.getItem('product')
			? localStorage.getItem('product')
			: 'all',
	);
	const [bids, setBids] = useState(null);

	useEffect(() => {
		fetch(`${serverPath}/bids`)
			.then((res) => res.json())
			.then((data) => {
				setBids(data);
			});
	}, []);

	useEffect(() => {
		localStorage.setItem('status', status);
		localStorage.setItem('product', product);
	}, [status, product]);

	return (
		<div className="with-nav body--dashboard">
			<AppContext.Provider
				value={{ status, setStatus, bids, product, setProduct }}
			>
				{bids && <LeftPanel />}
				<Table />
			</AppContext.Provider>
		</div>
	);
};

export default PageTable;
