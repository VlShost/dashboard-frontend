import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

interface PrivateRouteProps {
  component: JSX.Element;
  redirectTo: string;
}

const PrivateRoute = ({ component, redirectTo }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
