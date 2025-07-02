import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PublicRouteProps {
  component: JSX.Element;
  redirectTo: string;
}

const PublicRoute = ({ component, redirectTo }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <Navigate to={redirectTo} replace /> : component;
};

export default PublicRoute;
