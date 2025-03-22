import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileGeneral from './pages/profile/ProfileGeneral';
import ProfileConnectedAccounts from './pages/profile/ProfileConnectedAccounts';
import ProfileSecurity from './pages/profile/ProfileSecurity';
import ProfilePaymentMethods from './pages/profile/ProfilePaymentMethods';
import ProfileBalance from './pages/profile/ProfileBalance';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0c0c0c]">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<ProfileGeneral />} />
            <Route path="/profile-cuentas" element={<ProfileConnectedAccounts />} />
            <Route path="/profile-seguridad" element={<ProfileSecurity />} />
            <Route path="/profile-formas-de-pago" element={<ProfilePaymentMethods />} />
            <Route path="/profile-saldo" element={<ProfileBalance />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
