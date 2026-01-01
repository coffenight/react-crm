import TableTopBar from '../TableTopBar/TableTopBar.jsx';
import TableBody from '../TableBody/TableBody.jsx';

const Table = () => {
	return (
		<div className="main-wrapper">
			<div className="container-fluid">
				<div className="admin-heading-1">Все заявки</div>
				<TableTopBar />
				<TableBody />
			</div>
		</div>
	);
};

export default Table;
