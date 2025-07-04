import instance from '../api/axios';
import type { Company } from '../types/company';

export const fetchCompanies = async (): Promise<Company[]> => {
  const response = await instance.get('/companies');
  return response.data.data;
};

export const fetchCompanyById = async (id: number): Promise<Company> => {
  const response = await instance.get(`/companies?${id}`);
  return response.data.data;
};

export const createCompany = async (data: Omit<Company, 'id' | 'createdAt'>): Promise<Company> => {
  const response = await instance.post('/companies', data);
  return response.data.data;
};

export const updateCompany = async (
  id: number,
  data: Omit<Company, 'id' | 'createdAt'>
): Promise<Company> => {
  const response = await instance.patch(`/companies?${id}`, data);
  return response.data.data;
};

export const deleteCompany = async (id: number): Promise<void> => {
  await instance.delete(`/companies?${id}`);
};
