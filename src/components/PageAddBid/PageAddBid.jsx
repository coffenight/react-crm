import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { testDataFn } from '../../helpers/testData';
import { serverPath } from '../../helpers/variables';
import { createNewBid } from '../../helpers/utils';
import FormAddBid from './FormAddBid/FormAddBid';
import PageAddBidHeader from './PageAddBidHeader/PageAddBidHeader';

export const AppContext = createContext(null);

const PageAddBid = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [mail, setMail] = useState('');
	const [course, setCourse] = useState(null);
	const [isSending, setSending] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const data = testDataFn();
		setName(data.name);
		setPhone(data.phone);
		setMail(data.email);
		setCourse(data.course);
	}, []);

	const addBid = (e) => {
		e.preventDefault();
		setSending(true);
		const data = createNewBid(course, name, mail, phone);
		fetch(`${serverPath}/bids/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		}).then((res) => {
			if (res.ok === true) {
				navigate(0);
				setSending(false);
			}
		});
	};

	return (
		<div className="with-nav radial-bg flex-center add-form">
			<div className="white-plate white-plate--payment">
				<div className="container-fluid">
					<AppContext.Provider
						value={{
							name,
							setName,
							phone,
							setPhone,
							mail,
							setMail,
							course,
							setCourse,
							addBid,
							isSending,
						}}
					>
						<>
							<PageAddBidHeader />
							<FormAddBid />
						</>
					</AppContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default PageAddBid;
