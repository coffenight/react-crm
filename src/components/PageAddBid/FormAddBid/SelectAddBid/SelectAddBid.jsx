import { useContext } from 'react';
import { AppContext } from '../../PageAddBid';

const SelectAddBid = () => {
	const { courses, course, setCourse } = useContext(AppContext);

	const htmlOption = () => {
		return courses.map((cours) => {
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
				value={course}
				onChange={(e) => setCourse(e.target.value)}
			>
				{courses && htmlOption()}
			</select>
		</div>
	);
};

export default SelectAddBid;
