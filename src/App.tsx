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
import Discover from './components/discover/Discover';
import AffiliateCustomerDashboard from './components/afiliate/AffiliateCustomerDashboard';
import AffiliateCreatorDashboard from './components/afiliate/AffiliateCreatorDashboard';
import Dashboard from './components/dashboard/Dashboard';
import Inicio from './components/Inicio';
import Messages from './components/messsajes';
import MessageConversation from './components/messsajes/conversation';
import AllStreamsPage from './components/discover/AllStreamsPage';
import { WhopsContent } from './components/dashboard/WhopsContent';
import { PaymentLinksContent } from './components/dashboard/PaymentLinksContent';
import { FirstUserContent } from './components/dashboard/FirstUserContent';
import { WaitlistContent } from './components/dashboard/WaitlistContent';
import { CancellationReasonsContent } from './components/dashboard/CancellationReasonsContent';
import { FirstPaymentContent } from './components/dashboard/FirstPaymentContent';
import { NoDisputesContent } from './components/dashboard/NoDisputesContent';
import { ResolutionCenterContent } from './components/dashboard/ResolutionCenterContent';
import { TrackingLinksContent } from './components/dashboard/TrackingLinksContent';
import { PromotionContent } from './components/dashboard/PromotionContent';
import { PromoCodeContent } from './components/dashboard/PromoCodeContent';
import { AffiliatesContent } from './components/dashboard/AffiliatesContent';
import { MessagesAutomationContent } from './components/dashboard/MessagesAutomationContent';
import { SettingsContent } from './components/dashboard/SettingsContent';
import { TeamSettingsContent } from './components/dashboard/TeamSettingsContent';
import { ApiKeysContent } from './components/dashboard/ApiKeysContent';
import { OAuthContent } from './components/dashboard/OAuthContent';
import { WebhooksContent } from './components/dashboard/WebhooksContent';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0c0c0c]">
        <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        
          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/inicio" element={<Inicio />} />


          {/* Messages Routes */}
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:conversationId" element={<MessageConversation />} />


          {/* Protected Routes */}
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
        
        <Routes>

        {/* Campaing Routes*/}
        <Route path="/" element={<Campaign />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/campaign-start-here" element={<CampaignStartHere />} />
        <Route path="/campaign-rewards" element={<CampaignRewards />} />
        
        {/* Discover Routes */}
        <Route path="/discover" element={<Discover />} />
        <Route path="/" element={<Home />} />
        <Route path="/discover/home" element={<Home />} />
        <Route path="/discover/explore" element={<Discover />} />
        <Route path="/discover/leaderboards" element={<Discover />} />
        <Route path="/discover/for-you" element={<Discover />} />
        <Route path="/discover/all-streams" element={<AllStreamsPage />} />
        

        {/* Affiliate Routes */}
        <Route path="/affiliate/customer" element={<AffiliateCustomerDashboard />} />
        <Route path="/affiliate/creator" element={<AffiliateCreatorDashboard />} />

        {/* Dashboard Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/whops" element={<WhopsContent />} />
        <Route path="/dashboard/pagos" element={<PaymentLinksContent />} />
        <Route path="/dashboard/usuarios" element={<FirstUserContent />} />
        <Route path="/dashboard/listas-espera" element={<WaitlistContent />} />
        <Route path="/dashboard/cancelacion" element={<CancellationReasonsContent />} />
        <Route path="/dashboard/pago" element={<FirstPaymentContent />} />
        <Route path="/dashboard/disputas" element={<NoDisputesContent />} />
        <Route path="/dashboard/resolucion" element={<ResolutionCenterContent />} />
        <Route path="/dashboard/enlaces-seguimiento" element={<TrackingLinksContent />} />
        <Route path="/dashboard/plomos" element={<PromotionContent />} />
        <Route path="/dashboard/codigos" element={<PromoCodeContent />} />
        <Route path="/dashboard/afiliados" element={<AffiliatesContent />} />
        <Route path="/dashboard/mensajes" element={<MessagesAutomationContent />} />
        <Route path="/dashboard/ajustes/general" element={<SettingsContent />} />
        <Route path="/dashboard/ajustes/equipo" element={<TeamSettingsContent />} />
        <Route path="/dashboard/ajustes/api" element={<ApiKeysContent />} />
        <Route path="/dashboard/ajustes/oauth" element={<OAuthContent />} />
        <Route path="/dashboard/ajustes/webhooks" element={<WebhooksContent />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
