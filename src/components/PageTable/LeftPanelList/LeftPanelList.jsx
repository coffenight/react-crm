import { status as bidStatus } from '../../../helpers/variables';
import { useContext } from 'react';
import { AppContext } from '../PageTable/PageTable';

const LeftPanelList = () => {
	const { status, setStatus, bids } = useContext(AppContext);


	const count = () => {
		return bids.reduce((sum, item) => {
			if(item.status === 'new') {
				return sum + 1
			}
			return sum
		}, 0);
	};


	const html = bidStatus.map((item) => {
		return (
			<li key={item.id}
			    onClick={() => {
				    setStatus(item.value);
			    }}>
				<a
					data-value={item.value}
					data-role="left-status"
					className={`left-status ${item.value === status ? 'active' : ''}`}
				>
					{item.title}
					{item.value === 'new' && <div className="badge" id="badge-new">
						{count()}
					</div>}
				</a>
			</li>
		);
	});

	return <ul>{html}</ul>;
};

export default LeftPanelList;
