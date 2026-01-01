import { course } from '../../../helpers/variables.js';
import { AppContext } from '../PageTable/PageTable.jsx';
import { useContext } from 'react';

const TableTopSelect = () => {
	const { setProduct, product } = useContext(AppContext);

	const html = () => {
		return course.map((cours) => {
			return (<option value={cours.value} key={cours.id} >
				{cours.title}
			</option>);
		});
	};

	return (<div className="col">
		<select className="custom-select" id="productSelect" onChange={(e) => {setProduct(e.target.value)}} defaultValue={product}>
			{html()}
		</select>
	</div>);
};
export default TableTopSelect;
