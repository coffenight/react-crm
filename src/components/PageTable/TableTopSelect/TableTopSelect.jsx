import { course } from '../../../helpers/variables.js';
import { AppContext } from '../PageTable/PageTable.jsx';
import { useContext } from 'react';

const TableTopSelect = () => {
	const { setStatus } = useContext(AppContext);

	const html = () => {
		return course.map((cours) => {
			return (<option value={cours.value} key={cours.id} onChange={() => {setStatus(cours.value)}}>
				{cours.title}
			</option>);
		});
	};

	return (<div className="col">
		<select className="custom-select" id="productSelect">
			{html()}
		</select>
	</div>);
};
export default TableTopSelect;
