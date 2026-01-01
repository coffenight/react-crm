import LeftPanelList from '../LeftPanelList/LeftPanelList';

const LeftPanelNavigation = () => {
	return (
		<div className="left-panel__navigation">
			<div className="left-panel__navigation-title">Заявки</div>
			<LeftPanelList />
		</div>
	);
};

export default LeftPanelNavigation;
