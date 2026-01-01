import { course, status } from '../../../helpers/variables.js';
import { Link } from 'react-router-dom';

const TableBodyItems = ({ bid }) => {
	const cours = () => {
		return course.map((item) => {
			if (item.value === bid.course) {
				return item.title;
			}
		});
	};

	const statusBid = () => {
		return status.map((item) => {
			if (item.value === bid.status) {
				return item.titleOne;
			}
		});
	};

	const classBadge = (status) => {
		switch (status) {
			case 'all':
				return 'badge badge-pill badge-danger';
			case 'inwork':
				return 'badge badge-pill badge-warning';
			case 'new':
				return 'badge badge-pill badge-danger';
			case 'complete':
				return 'badge badge-pill badge-success';
		}
	};

	return (
		<tr>
			<th scope="row" className={'table-id-header'}>
				{' '}
				<span className={'table-id'}>{bid.id}</span>
				<span className={'table-id-text'}>{bid.id}</span>
			</th>
			<td>{bid.date}</td>
			<td>{cours()}</td>
			<td>{bid.name}</td>
			<td>{bid.mail}</td>
			<td>{bid.phone}</td>
			<td>
				<div className={classBadge(bid.status)}>{statusBid()}</div>
			</td>
			<td>
				<Link to={`/edit/${bid.id}`}>
					<p>Редактировать</p>
				</Link>
			</td>
		</tr>
	);
};
export default TableBodyItems;

// <tr>
// 	<th scope="row">2</th>
// 	<td>01.04.2020</td>
// 	<td>Курс по верстке</td>
// 	<td>Василий Петрович</td>
// 	<td>info@gmail.ru</td>
// 	<td>+7 (909) 77-55-777</td>
// 	<td>
// 		<div className="badge badge-pill badge-warning">
// 			В работе
// 		</div>
// 	</td>
// 	<td>
// 		<a href="edit.html">Редактировать</a>
// 	</td>
// </tr>
// <tr>
// 	<th scope="row">1</th>
// 	<td>01.04.2020</td>
// 	<td>Курс по верстке</td>
// 	<td>Николай Владимирович</td>
// 	<td>info@mail.ru</td>
// 	<td>+7 (909) 77-55-777</td>
// 	<td>
// 		<div className="badge badge-pill badge-success">
// 			Завершенный
// 		</div>
// 	</td>
// 	<td>
// 		<a href="edit.html">Редактировать</a>
// 	</td>
// </tr>
