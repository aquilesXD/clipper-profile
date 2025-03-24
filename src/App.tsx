import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileGeneral from './pages/profile/ProfileGeneral';
import ProfileConnectedAccounts from './pages/profile/ProfileConnectedAccounts';
import ProfileSecurity from './pages/profile/ProfileSecurity';
import ProfilePaymentMethods from './pages/profile/ProfilePaymentMethods';
import ProfileBalance from './pages/profile/ProfileBalance';
import { ProfileBillign } from './pages/profile/ProfileBillign';
import { ProfileMemberships } from './pages/profile/ProfileMemberships';
import { ProfileResolutionCenter } from './pages/profile/ProfileResolutionCenter';
import { ProfileDangerZone } from './pages/profile/ProfileDangerZone';
import Layout from './components/layout/Layout';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import VerifyCode from './pages/auth/VerifyCode';
import Campaign from './pages/campaign/Campaign';
import CampaignRewards from './pages/campaign/CampaignRewards';
import CampaignStartHere from './pages/campaign/CampaignStartHere';
import Home from './pages/campaign/Home';




function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0c0c0c]">
        <Routes>
          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-code" element={<VerifyCode />} />

          {/* Protected Routes */}
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<ProfileGeneral />} />
            <Route path="/profile-cuentas" element={<ProfileConnectedAccounts />} />
            <Route path="/profile-seguridad" element={<ProfileSecurity />} />
            <Route path="/profile-formas-de-pago" element={<ProfilePaymentMethods />} />
            <Route path="/profile-saldo" element={<ProfileBalance />} />
            <Route path="/profile-facturacion" element={<ProfileBillign />} />
            <Route path="/profile-membresias" element={<ProfileMemberships />} />
            <Route path="/profile-resolucion" element={<ProfileResolutionCenter />} />
            <Route path="/profile-peligro" element={<ProfileDangerZone />} />
          </Route>
        </Routes>
        {/* Campaing Routes*/}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Campaign />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/campaign-start-here" element={<CampaignStartHere />} />
        <Route path="/campaign-rewards" element={<CampaignRewards />} />
        {/* Add other routes as needed */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
