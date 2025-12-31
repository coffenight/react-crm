import TableTopStatusBar from '../TableTopStatusBar/TableTopStatusBar.jsx';
import TableTopSelect from '../TableTopSelect/TableTopSelect.jsx';

const TableTopBar = () => {
	return (
		<form>
			<div className="row mb-3 justify-content-start">
				<TableTopStatusBar />
				<TableTopSelect />
			</div>
		</form>
	);
};
export default TableTopBar;
