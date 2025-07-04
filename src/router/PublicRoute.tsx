import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

interface PublicRouteProps {
  component: JSX.Element;
  redirectTo: string;
}

const PublicRoute = ({ component, redirectTo }: PublicRouteProps) => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Navigate to={redirectTo} replace /> : component;
};

export default PublicRoute;
