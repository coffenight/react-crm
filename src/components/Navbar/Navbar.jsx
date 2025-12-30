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
				<Link to={'/edit'}>
					<p>Редактирование заявки</p>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
