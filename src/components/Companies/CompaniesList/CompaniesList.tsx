import { useQuery } from '@tanstack/react-query';
import { fetchCompanies } from '../../../services/company';
import type { Company } from '../../../types/company';

const CompaniesList = () => {
  const { data, isLoading, isError } = useQuery<Company[]>({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Failed to load companies</div>;
  }

  return (
    <>
      <div>CompaniesList</div>

      <ul>
        {data?.map((company) => (
          <li key={company.id}>
            {company.name} - {company.service} - {company.capital}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CompaniesList;
