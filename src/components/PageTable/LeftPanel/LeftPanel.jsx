import LeftPanelHeader from '../LeftPanelHeader/LeftPanelHeader';
import LeftPanelNavigation from '../LeftPanelNavigation/LeftPanelNavigation';
import LeftPanelUser from '../LeftPanelUser/LeftPanelUser';

const LeftPanel = () => {
	return (
		<div className="left-panel blue-skin">
			<LeftPanelHeader />
			<LeftPanelUser />
			<LeftPanelNavigation />
		</div>
	);
};

export default LeftPanel;
