import { Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Companies from './pages/Companies';

function App() {
  return (
    <Routes>
      <Route path="auth/signup" element={<SignUp />} />
      <Route path="auth/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/companies" element={<Companies />} />
    </Routes>
  );
}

export default App;
