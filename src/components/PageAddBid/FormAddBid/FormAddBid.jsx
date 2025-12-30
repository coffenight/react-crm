import { useContext } from 'react';
import { AppContext } from '../PageAddBid';

import SelectAddBid from './SelectAddBid/SelectAddBid';

const FormAddBid = () => {
	const { name, setName, phone, setPhone, mail, setMail, addBid, isSending } =
		useContext(AppContext);

	return (
		<form
			id="form"
			onSubmit={(e) => {
				addBid(e);
			}}
		>
			<label>Ваши данные:</label>
			<div className="form-group">
				<input
					id="name"
					type="text"
					name="name"
					autoComplete="on"
					className="form-control"
					placeholder="Имя и Фамилия"
					required
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</div>
			<div className="form-group">
				<input
					id="phone"
					type="text"
					name="phone"
					autoComplete="on"
					className="form-control"
					placeholder="Телефон"
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
				/>
			</div>
			<div className="form-group">
				<input
					id="email"
					type="email"
					name="email"
					autoComplete="on"
					className="form-control"
					placeholder="Email"
					required
					value={mail}
					onChange={(e) => {
						setMail(e.target.value);
					}}
				/>
			</div>
			<SelectAddBid />
			<div className="form-group">
				<button
					type="submit"
					className={`btn btn-lg btn-primary btn-block ${
						isSending ? ' disabled' : ''
					}`}
					autoFocus
				>
					Оформить заявку
				</button>
			</div>
		</form>
	);
};

export default FormAddBid;
