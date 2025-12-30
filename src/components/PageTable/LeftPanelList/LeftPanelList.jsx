import { status as bidStatus } from '../../../helpers/variables';
import { useContext } from 'react';
import { AppContext } from '../PageTable/PageTable';

const LeftPanelList = () => {
	const { status, setStatus } = useContext(AppContext);

	const html = bidStatus.map((item) => {
		return (
			<li key={item.id}
			onClick={()=>{setStatus(item.value);}}>
				<a
					data-value={item.value}
					data-role="left-status"
					className={`${item.value === status ? 'active' : ''}`}
				>
					{item.title}
					<div className="badge" id="badge-new">
						12
					</div>
				</a>
			</li>
		);
	});

	return <ul>{html}</ul>;
};

export default LeftPanelList;
