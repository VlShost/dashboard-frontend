import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createCompany } from '../../../services/company';

const CreateCompanyForm = () => {
  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: {
      name: '',
      service: '',
      capital: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      service: Yup.string().required('Required'),
      capital: Yup.number().required('Required'),
    }),
    onSubmit: (values) => {
      mutation.mutate({
        name: values.name,
        service: values.service,
        capital: values.capital,
      });
    },
  });

  const mutation = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Create new company</h3>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        )}
      </div>

      <div>
        <input
          type="text"
          name="service"
          placeholder="Service"
          value={formik.values.service}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.service && formik.errors.service && (
          <div style={{ color: 'red' }}>{formik.errors.service}</div>
        )}
      </div>

      <div>
        <input
          type="text"
          name="capital"
          placeholder="Capital"
          value={formik.values.capital}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.capital && formik.errors.capital && (
          <div style={{ color: 'red' }}>{formik.errors.capital}</div>
        )}
      </div>

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create company'}
      </button>
    </form>
  );
};

export default CreateCompanyForm;
