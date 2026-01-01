import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="project-nav">
			<div className="project-nav__links-wrapper">
				<Link to={'/'}>
					<p>Форма добавления заявок</p>
				</Link>
				<Link to={'/table'}>
					<p>Таблица с заявками</p>
				</Link>
				{/*Удалил ссылку на редактирование заявки, поскольку она бессмысленна, не понятно какую редактировать*/}
			</div>
		</nav>
	);
};

export default Navbar;
