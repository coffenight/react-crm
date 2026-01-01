import { useContext } from 'react';
import { AppContext } from '../../PageAddBid';
import { course as coursesList } from '../../../../helpers/variables.js';

const SelectAddBid = () => {
	const { course, setCourse } = useContext(AppContext);

	const htmlOption = () => {
		return coursesList.map((cours) => {
			return (
				<option key={cours.id} value={cours.value}>
					{cours.title}
				</option>
			);
		});
	};

	return (
		<div className="form-group">
			<label htmlFor="product">Продукт:</label>
			<select
				id="product"
				name="product"
				className="form-control"
				value={course ? course : undefined}
				onChange={(e) => setCourse(e.target.value)}
			>
				{htmlOption()}
			</select>
		</div>
	);
};

export default SelectAddBid;
