import { useContext } from 'react';
import { AppContext } from '../PageTable/PageTable.jsx';
import TableBodyHeader from '../TableBodyHeader/TableBodyHeader.jsx';
import TableBodyItems from '../TableBodyItems/TableBodyItems.jsx';


const TableBody = () => {

		const { product, status, bids } = useContext(AppContext);

		let arrBids = null;

		if (bids) {
			arrBids = bids.filter((item) => {
				if (status !== 'all') {
					return item.status === status && item;

				}

				return item;
			});
		}

		if (arrBids) {
			arrBids = arrBids.filter((item) => {
				if (product !== 'all') {
					return item.course === product && item;
				}
				return item;
			});
		}


		const html = (arr) => {
			return arr.map((bid) => {
				return <TableBodyItems key={bid.id} bid={bid} />;
			});
		};

		return (<table className="table fs-14">
			<TableBodyHeader />
			<tbody id="tbody">
			{bids && html(arrBids)}
			</tbody>
		</table>);
	}
;
export default TableBody;
