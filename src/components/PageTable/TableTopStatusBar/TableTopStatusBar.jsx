import { AppContext } from '../PageTable/PageTable.jsx';
import { useContext } from 'react';
import { status as statusList } from '../../../helpers/variables.js';

const TableTopStatusBar = () => {
	const { status, setStatus } = useContext(AppContext);

	const html = () => {
		return statusList.map((item) => {
			return (<a
				className={`btn btn-light ${item.value === status ? ' active' : ''}`}
				key={item.id}
				onClick={() => {
					setStatus(item.value);
				}}
			>
				{item.title}
			</a>);
		});
	};

	return (
		<div className="col">
			<div id="topStatusBar" className="btn-group" role="group" >
				{html()}
			</div>
		</div>);
};

export default TableTopStatusBar;
