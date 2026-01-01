import EditPageHeader from '../EditPageHeader/EditPageHeader.jsx';
import EditPageForm from '../EditPageForm/EditPageForm.jsx';

const EditPage = () => {
	return (<div className="form-wrapper">
		<div className="container-fluid">
			<EditPageHeader />
			<div className="row">
				<div className="col">
					<EditPageForm />
				</div>
			</div>
		</div>
	</div>);
};
export default EditPage;
