import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { course as courseList, serverPath, status as statusList } from '../../../helpers/variables.js';

const EditPageForm = () => {
	const { id } = useParams();
	const [date, setDate] = useState('');
	const [course, setCourse] = useState('');
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [phone, setPhone] = useState('');
	const [status, setStatus] = useState('');
	const navigate = useNavigate();


	useEffect(() => {
		fetch(`${serverPath}/bids/${id}`).then((res) => {
			return res.json();
		}).then((data) => {
			setDate(data.date);
			setCourse(data.course);
			setName(data.name);
			setMail(data.mail);
			setPhone(data.phone);
			setStatus(data.status);
		});
	}, [id]);

	const saveBid = (e) => {
		e.preventDefault();
		const data = {
			id: id,
			date: date,
			course:course,
			name: name,
			mail: mail,
			phone: phone,
			status: status
		};
		fetch(`${serverPath}/bids/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		}).then((res) => {
				if (res.ok === true) {
					navigate('/table');
				}
			})
	};


	return (<form id="form" onSubmit={(e) => {
		saveBid(e);
	}}>
		<div className="card mb-4">
			<div className="card-header">Данные о заявке</div>
			<div className="card-body">
				<div className="row mb-3">
					<div className="col-md-2">
						<strong>ID:</strong>
					</div>
					<div className="col">Заявка №<span id="number">{id}</span></div>
					<input name="id" type="hidden" id="id" />
				</div>

				{date && <div className="row mb-3">
					<div className="col-md-2">
						<strong>Дата создания:</strong>
					</div>
					<div className="col" id="date">{date}</div>
				</div>}

				<div className="row mb-3">
					<div className="col-md-2">
						<strong>Продукт:</strong>
					</div>
					<div className="col">
						<select id="product" name="product" className="custom-select" value={course} onChange={(e) => {
							setCourse(e.target.value);
						}}>
							{courseList.map((item) => {
								return (<option key={item.id} value={item.value}>{item.title}</option>);
							})}
						</select>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-md-2">
						<strong>Имя:</strong>
					</div>
					<div className="col">
						<input
							type="text"
							className="form-control"
							value={name}
							id="name"
							name="name"
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-md-2">
						<strong>Email:</strong>
					</div>
					<div className="col">
						<input
							type="text"
							className="form-control"
							value={mail}
							id="email"
							name="email"
							onChange={(e) => {
								setMail(e.target.value);
							}}
						/>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-md-2">
						<strong>Телефон:</strong>
					</div>
					<div className="col">
						<input
							type="text"
							className="form-control"
							value={phone}
							id="phone"
							name="phone"
							onChange={(e) => {
								setPhone(e.target.value);
							}}
						/>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-md-2">
						<strong>Статус заявки:</strong>
					</div>
					<div className="col">
						<select className="custom-select" id="status" name="status" value={status} onChange={(e) => {
							setStatus(e.target.value);
						}}>
							{statusList.map((item) => {
								return (<option key={item.id} value={item.value}>{item.titleOne}</option>);
							})}
						</select>
					</div>
				</div>
			</div>
		</div>
		<div className="row justify-content-between">
			<div className="col text-right">
				<button type="submit" className="btn btn-primary">Сохранить изменения</button>
			</div>
		</div>
	</form>);
};
export default EditPageForm;
