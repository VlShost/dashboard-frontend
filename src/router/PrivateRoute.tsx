import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps {
  component: JSX.Element;
  redirectTo: string;
}

const PrivateRoute = ({ component, redirectTo }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
