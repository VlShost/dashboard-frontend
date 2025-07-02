import { Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Companies from './pages/Companies';
import PublicRoute from './router/PublicRoute';
import PrivateRoute from './router/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route
        path="auth/signup"
        element={<PublicRoute redirectTo="/companies" component={<SignUp />} />}
      />
      <Route
        path="auth/signin"
        element={<PublicRoute redirectTo="/companies" component={<SignIn />} />}
      />
      <Route
        path="/profile"
        element={<PrivateRoute redirectTo="/auth/signin" component={<Profile />} />}
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute redirectTo="/auth/signin" component={<Dashboard />} />}
      />
      <Route
        path="/companies"
        element={<PrivateRoute redirectTo="/auth/signin" component={<Companies />} />}
      />
    </Routes>
  );
}

export default App;
