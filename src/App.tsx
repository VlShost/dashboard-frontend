import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/companies" element={<Companies />} /> */}
    </Routes>
  );
}

export default App;
