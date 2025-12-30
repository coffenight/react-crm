import { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { testDataFn } from '../../helpers/testData';
import { serverPath } from '../../helpers/variables';
import { createNewBid } from '../../helpers/utils';
import FormAddBid from './FormAddBid/FormAddBid';
import PageAddBidHeader from './PageAddBidHeader/PageAddBidHeader';
import Navbar from '../Navbar/Navbar';

export const AppContext = createContext(null);

const PageAddBid = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [mail, setMail] = useState('');
	const [course, setCourse] = useState(null);
	const [courses, setCourses] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isSending, setSending] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const data = testDataFn();

	useEffect(() => {
		fetch(`${serverPath}/courses`)
			.then((res) => res.json())
			.then((data) => {
				setIsLoading(true);
				setCourses(data);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
			});
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
		})
			.then((res) => {
				if (res.ok === true) {
					navigate(0);
					setError(null);
					setSending(false);
				}
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return (
		<div className="white-plate white-plate--payment">
			<div className="container-fluid">
				{!isLoading && <h1>Loading...</h1>}

				{courses && (
					<AppContext.Provider
						value={{
							courses,
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
						{isLoading && (
							<>
								<PageAddBidHeader />
								<FormAddBid />
							</>
						)}
						{error && <p>{error}</p>}
					</AppContext.Provider>
				)}
			</div>
		</div>
	);
};

export default PageAddBid;
