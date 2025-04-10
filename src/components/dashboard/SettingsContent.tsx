import { useState } from "react";
import { DashboardLayout } from "./DashBoardLayout";
import { File, Upload, Plus, Save } from "lucide-react";

export function SettingsContent() {
  // State for notification toggles
  const [notificationSettings, setNotificationSettings] = useState({
    allNotifications: true,
    creatorMilestone: true,
    leaderboardPosition: true,
    marketplaceStatus: true,
    newCreatorReferral: true,
    newDisputeAlert: true,
    newEntryWaitlist: true,
    newMemberJoined: true
  });

  // State for payment options
  const [paymentOptions, setPaymentOptions] = useState({
    redirectUrl: false,
    graceAccess: false,
    requirePhoneVerification: false,
    sendPromoEmails: true,
    sendTransactionEmails: true,
  });

  // State for legal options
  const [legalOptions, setLegalOptions] = useState({
    requireTermsAcceptance: false,
    allowUserNIF: false,
  });

  const [fiscalNumber, setFiscalNumber] = useState("");

  // Handler for notification toggle changes
  const handleNotificationToggle = (key: string) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key as keyof typeof notificationSettings]
    });
  };

  // Handler for payment options toggle changes
  const handlePaymentOptionToggle = (key: string) => {
    setPaymentOptions({
      ...paymentOptions,
      [key]: !paymentOptions[key as keyof typeof paymentOptions]
    });
  };

  // Handler for legal options toggle changes
  const handleLegalOptionToggle = (key: string) => {
    setLegalOptions({
      ...legalOptions,
      [key]: !legalOptions[key as keyof typeof legalOptions]
    });
  };

  // Custom toggle switch component
  const ToggleSwitch = ({ checked, onChange }: { checked: boolean, onChange: () => void }) => (
    <div className="relative inline-block w-12 align-middle select-none">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        readOnly
      />
      <div
        className={`block w-12 h-6 rounded-full transition ${checked ? 'bg-blue-600' : 'bg-[#2a2a2a]'}`}
        onClick={onChange}
      ></div>
      <div
        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${checked ? 'translate-x-6' : ''}`}
        onClick={onChange}
      ></div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Notificaciones Section */}
          <h2 className="text-2xl font-bold text-white mb-4">Notificaciones</h2>
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-8">
            <div className="p-4 border-b border-[#1c1c1c]">
              <h3 className="text-lg font-medium text-white mb-2">Opciones</h3>
            </div>

            {/* All Notifications Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Todas las notificaciones</p>
                <p className="text-gray-400 text-sm">Activar o desactivar todas las notificaciones</p>
              </div>
              <ToggleSwitch
                checked={notificationSettings.allNotifications}
                onChange={() => handleNotificationToggle('allNotifications')}
              />
            </div>

            {/* Creator Milestone Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Creator Milestone Unlocked</p>
                <p className="text-gray-400 text-sm">When you unlock a new creator milestone, you will receive a notification to claim your reward</p>
              </div>
              <ToggleSwitch
                checked={notificationSettings.creatorMilestone}
                onChange={() => handleNotificationToggle('creatorMilestone')}
              />
            </div>

            {/* Leaderboard Position Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Leaderboard Position</p>
                <p className="text-gray-400 text-sm">Get a daily notification for your leaderboard position.</p>
              </div>
              <ToggleSwitch
                checked={notificationSettings.leaderboardPosition}
                onChange={() => handleNotificationToggle('leaderboardPosition')}
              />
            </div>

            {/* Marketplace Status Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Marketplace status</p>
                <p className="text-gray-400 text-sm">Get updates on your whops' marketplace statuses.</p>
              </div>
              <ToggleSwitch
                checked={notificationSettings.marketplaceStatus}
                onChange={() => handleNotificationToggle('marketplaceStatus')}
              />
            </div>

            {/* New Creator Referral Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">New Creator Referral</p>
                <p className="text-gray-400 text-sm">Get a notification whenever you refer a new creator to Whop</p>
              </div>
              <ToggleSwitch
                checked={notificationSettings.newCreatorReferral}
                onChange={() => handleNotificationToggle('newCreatorReferral')}
              />
            </div>

            {/* New Dispute Alert Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">New Dispute Alert</p>
                <p className="text-gray-400 text-sm">Get a notification whenever a payment receives a dispute alert.</p>
              </div>
              <ToggleSwitch
                checked={notificationSettings.newDisputeAlert}
                onChange={() => handleNotificationToggle('newDisputeAlert')}
              />
            </div>

            {/* New Entry to Waitlist Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">New entry to your waitlist</p>
                <p className="text-gray-400 text-sm">This notification is sent when a new potential member joins your waitlist.</p>
              </div>
              <ToggleSwitch
                checked={notificationSettings.newEntryWaitlist}
                onChange={() => handleNotificationToggle('newEntryWaitlist')}
              />
            </div>

            {/* New Member Joined Toggle */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-medium">New member joined your Whop</p>
                <p className="text-gray-400 text-sm">This notification is sent when a new member joins your Whop</p>
              </div>
              <ToggleSwitch
                checked={notificationSettings.newMemberJoined}
                onChange={() => handleNotificationToggle('newMemberJoined')}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Pedido</h2>
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-8">
            <div className="p-4 border-b border-[#1c1c1c]">
              <h3 className="text-lg font-medium text-white mb-2">Opciones</h3>
            </div>

            {/* Redirect URL Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">URL de redireccionamiento del pago</p>
                <p className="text-gray-400 text-sm">Los usuarios serán redirigidos a una URL personalizada inmediatamente después del pago.</p>
              </div>
              <div className="flex items-center space-x-2">
                <ToggleSwitch
                  checked={paymentOptions.redirectUrl}
                  onChange={() => handlePaymentOptionToggle('redirectUrl')}
                />
                <button className="bg-[#1a1a1a] hover:bg-[#242424] text-white font-medium py-2 px-4 rounded">
                  Configure
                </button>
              </div>
            </div>

            {/* Grace Access Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Acceso en mora</p>
                <p className="text-gray-400 text-sm">Permitir que los usuarios accedan a su suscripción aunque esté vencida</p>
              </div>
              <ToggleSwitch
                checked={paymentOptions.graceAccess}
                onChange={() => handlePaymentOptionToggle('graceAccess')}
              />
            </div>

            {/* Phone Verification Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Exigir a los usuarios que verifiquen el teléfono</p>
                <p className="text-gray-400 text-sm">Requiere que los usuarios confirmen su teléfono con un código SMS antes de pasar por caja.</p>
              </div>
              <ToggleSwitch
                checked={paymentOptions.requirePhoneVerification}
                onChange={() => handlePaymentOptionToggle('requirePhoneVerification')}
              />
            </div>

            {/* Promo Emails Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Envíe correos electrónicos promocionales a sus afiliados</p>
                <p className="text-gray-400 text-sm">Envíe correos electrónicos a sus usuarios cuando haya nuevas promociones disponibles. Si esta opción está desactivada, su empresa nunca recibirá publicidad de los usuarios de Whop.</p>
              </div>
              <ToggleSwitch
                checked={paymentOptions.sendPromoEmails}
                onChange={() => handlePaymentOptionToggle('sendPromoEmails')}
              />
            </div>

            {/* Transaction Emails Toggle */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Envíe correos electrónicos transaccionales a sus afiliados</p>
                <p className="text-gray-400 text-sm">Enviar correos electrónicos sobre compras, próximas renovaciones e intentos de pago a los usuarios.</p>
              </div>
              <ToggleSwitch
                checked={paymentOptions.sendTransactionEmails}
                onChange={() => handlePaymentOptionToggle('sendTransactionEmails')}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Analítica</h2>
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden p-4 mb-8">
            {/* Google Analytics and Meta Pixel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2">ID de Google Analytics</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Meta Pixel ID</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>
            </div>

            {/* TikTok and Pinterest */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2">TikTok Pixel ID</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">ID de pixel de Pinterest</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>
            </div>

            {/* Reddit Pixel */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">ID de pixel de Reddit</label>
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                />
                <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
              </div>
            </div>

            {/* Hyros Section */}
            <h3 className="text-lg font-medium text-white mb-4">Hyros</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2">Hyros Pixel ID</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Clave API de Hyros</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>
            </div>

            {/* X Pixel Section */}
            <h3 className="text-lg font-medium text-white mb-4">X Pixel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2">X Pixel ID</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Checkout Initiated Event ID</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Payment Method Added Event ID</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Purchase Event ID</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                  />
                  <button className="bg-[#2a2a2a] text-gray-400 hover:text-white px-4 rounded-none py-2.5">Volver a</button>
                  <button className="bg-[#1a1a1a] text-white px-4 rounded-r-md py-2.5">Guardar</button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Legal</h2>
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-8">
            <div className="p-4 border-b border-[#1c1c1c]">
              <h3 className="text-lg font-medium text-white mb-2">Documentos</h3>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Terms Document */}
              <div className="text-center">
                <div className="bg-[#1a1a1a] w-24 h-32 mx-auto rounded-md flex items-center justify-center mb-2 relative">
                  <File className="text-gray-400" size={28} />
                  <div className="absolute bottom-2 w-full text-center">
                    <span className="bg-gray-500 text-white text-xs px-2 py-0.5 rounded">Términos</span>
                  </div>
                </div>
                <p className="text-white font-medium text-sm">Condiciones de uso</p>
                <p className="text-gray-400 text-xs">PDF con un tamaño máximo de 10 MB</p>
                <button className="mt-2 bg-[#1a1a1a] hover:bg-[#242424] text-white font-medium py-1.5 px-3 rounded text-sm flex items-center justify-center mx-auto">
                  <Upload className="mr-1" size={14} />
                  Cargar archivo
                </button>
              </div>

              {/* Privacy Document */}
              <div className="text-center">
                <div className="bg-[#1a1a1a] w-24 h-32 mx-auto rounded-md flex items-center justify-center mb-2 relative">
                  <File className="text-gray-400" size={28} />
                  <div className="absolute bottom-2 w-full text-center">
                    <span className="bg-gray-500 text-white text-xs px-2 py-0.5 rounded">Privacidad</span>
                  </div>
                </div>
                <p className="text-white font-medium text-sm">Política de privacidad</p>
                <p className="text-gray-400 text-xs">PDF con un tamaño máximo de 10 MB</p>
                <button className="mt-2 bg-[#1a1a1a] hover:bg-[#242424] text-white font-medium py-1.5 px-3 rounded text-sm flex items-center justify-center mx-auto">
                  <Upload className="mr-1" size={14} />
                  Cargar archivo
                </button>
              </div>

              {/* Return Policy Document */}
              <div className="text-center">
                <div className="bg-[#1a1a1a] w-24 h-32 mx-auto rounded-md flex items-center justify-center mb-2 relative">
                  <File className="text-gray-400" size={28} />
                  <div className="absolute bottom-2 w-full text-center">
                    <span className="bg-gray-500 text-white text-xs px-2 py-0.5 rounded">Devolución</span>
                  </div>
                </div>
                <p className="text-white font-medium text-sm">Política de devoluciones</p>
                <p className="text-gray-400 text-xs">PDF con un tamaño máximo de 10 MB</p>
                <button className="mt-2 bg-[#1a1a1a] hover:bg-[#242424] text-white font-medium py-1.5 px-3 rounded text-sm flex items-center justify-center mx-auto">
                  <Upload className="mr-1" size={14} />
                  Cargar archivo
                </button>
              </div>

              {/* CLUF Document */}
              <div className="text-center">
                <div className="bg-[#1a1a1a] w-24 h-32 mx-auto rounded-md flex items-center justify-center mb-2 relative">
                  <File className="text-gray-400" size={28} />
                  <div className="absolute bottom-2 w-full text-center">
                    <span className="bg-gray-500 text-white text-xs px-2 py-0.5 rounded">CLUF</span>
                  </div>
                </div>
                <p className="text-white font-medium text-sm">CLUF</p>
                <p className="text-gray-400 text-xs">PDF con un tamaño máximo de 10 MB</p>
                <button className="mt-2 bg-[#1a1a1a] hover:bg-[#242424] text-white font-medium py-1.5 px-3 rounded text-sm flex items-center justify-center mx-auto">
                  <Upload className="mr-1" size={14} />
                  Cargar archivo
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Opciones</h2>
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-8">
            {/* Terms Acceptance Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Exigir la aceptación de los términos y condiciones</p>
                <p className="text-gray-400 text-sm">En el momento de pagar, los usuarios deberán aceptar las condiciones generales.</p>
              </div>
              <ToggleSwitch
                checked={legalOptions.requireTermsAcceptance}
                onChange={() => handleLegalOptionToggle('requireTermsAcceptance')}
              />
            </div>

            {/* Allow NIF Toggle */}
            <div className="p-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Permitir que el usuario introduzca el NIF</p>
                <p className="text-gray-400 text-sm">Al pagar, los usuarios podrán introducir su NIF.</p>
              </div>
              <ToggleSwitch
                checked={legalOptions.allowUserNIF}
                onChange={() => handleLegalOptionToggle('allowUserNIF')}
              />
            </div>

            {/* Fiscal Number Input */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Número de identificación</p>
                <p className="text-gray-400 text-sm">Introduzca el número de identificación fiscal de su empresa para activar esta opción.</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={fiscalNumber}
                  onChange={(e) => setFiscalNumber(e.target.value)}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white w-60"
                />
                <button className="bg-[#1a1a1a] hover:bg-[#242424] border border-[#2a2a2a] text-white font-medium py-2.5 px-4 rounded-md flex items-center">
                  <Save size={16} className="mr-2" />
                  Guardar
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Desarrollador</h2>
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-8">
            <div className="p-4 border-b border-[#1c1c1c] flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Claves API</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex items-center">
                <Plus className="mr-1" size={16} />
                Crear clave API
              </button>
            </div>

            <div className="p-6 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-400 text-2xl">:(</span>
              </div>
              <h4 className="text-white font-medium text-lg mb-2">Aún no hay claves API</h4>
              <p className="text-gray-400 text-sm max-w-md">
                Cuando cree una clave API, aparecerá aquí. Las claves API se utilizan para autenticarse con la API de Whop.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Registros de auditoría</h2>
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden">
            <div className="p-4 border-b border-[#1c1c1c]">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-400 font-medium">Evento</div>
                <div className="text-gray-400 font-medium">Cambios</div>
                <div className="text-gray-400 font-medium">Fecha</div>
              </div>
            </div>

            <div className="p-6 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-400 text-2xl">:(</span>
              </div>
              <h4 className="text-white font-medium text-lg mb-2">Aún no hay registros de auditoría</h4>
              <p className="text-gray-400 text-sm max-w-md">
                Cuando usted o su equipo realicen cambios en su empresa, aparecerán aquí. Esto es útil para hacer un seguimiento de quién hizo qué.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
