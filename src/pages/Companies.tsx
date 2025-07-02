import CompaniesList from '../components/Companies/CompaniesList/CompaniesList';
import CreateCompanyForm from '../components/Forms/CreateCompanyForm/CreateCompanyForm';

const Companies = () => {
  return (
    <>
      <CreateCompanyForm />
      <CompaniesList />
    </>
  );
};

export default Companies;
