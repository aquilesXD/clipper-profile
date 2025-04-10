import { useState } from "react";
import { DashboardLayout } from "./DashBoardLayout";
import { BookOpen, Plus, Copy, RotateCw } from "lucide-react";
import { CreateRedirectUrlModal } from "./CreateRedirectUrlModal";

type RedirectUrl = {
  id: string;
  url: string;
  createdAt: string;
};

export function OAuthContent() {
  const [redirectUrls, setRedirectUrls] = useState<RedirectUrl[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Estado de las credenciales
  const [clientId] = useState("JhaiNzZdq5Ji-UhopYor6CKLuD7LaFd5HnSeA5owCkY");
  const [clientSecret] = useState("hz5...CBs");
  const [copied, setCopied] = useState(false);

  const handleCopyClientId = () => {
    navigator.clipboard.writeText(clientId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetSecret = () => {
    // En una aplicación real, esto llamaría a una API para regenerar el secreto
    console.log("Regenerar secreto del cliente");
  };

  const handleCreateRedirectUrl = (url: string) => {
    const newRedirectUrl: RedirectUrl = {
      id: Math.random().toString(36).substring(7),
      url,
      createdAt: new Date().toISOString()
    };
    setRedirectUrls([...redirectUrls, newRedirectUrl]);
    setShowCreateModal(false);
  };

  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb navigation */}
          <div className="flex items-center text-gray-400 mb-6 text-sm">
            <span>AJUSTES</span>
            <span className="mx-2">&gt;</span>
            <span className="text-white">OAUTH</span>
          </div>

          {/* Header with buttons */}
          <div className="flex justify-between items-center mb-6">
            <div />
            <div className="flex items-center space-x-2">
              <button className="bg-[#1a1a1a] text-white py-2 px-4 rounded-md border border-[#2a2a2a] flex items-center">
                <BookOpen size={16} className="mr-2" />
                Documentación
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center"
                onClick={() => setShowCreateModal(true)}
              >
                <Plus size={16} className="mr-2" />
                Crear URL de redireccionamiento
              </button>
            </div>
          </div>

          {/* Client ID Section */}
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-6">
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-400 text-sm">ID de cliente</h3>
                <button
                  className="bg-[#1a1a1a] text-white py-1.5 px-3 rounded-md border border-[#2a2a2a] flex items-center text-sm"
                  onClick={handleCopyClientId}
                >
                  <Copy size={14} className="mr-2" />
                  {copied ? 'Copiado' : 'Copiar ID'}
                </button>
              </div>
              <div className="bg-[#121212] border border-[#1c1c1c] rounded p-3 text-white">
                {clientId}
              </div>
            </div>
          </div>

          {/* Client Secret Section */}
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-6">
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-400 text-sm">Secreto de cliente</h3>
                <button
                  className="bg-[#1a1a1a] text-white py-1.5 px-3 rounded-md border border-[#2a2a2a] flex items-center text-sm"
                  onClick={handleResetSecret}
                >
                  <RotateCw size={14} className="mr-2" />
                  Restablecer secreto
                </button>
              </div>
              <div className="bg-[#121212] border border-[#1c1c1c] rounded p-3 text-white">
                {clientSecret}
              </div>
            </div>
          </div>

          {/* Redirect URLs Section */}
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-[#1c1c1c]">
              <h3 className="text-white text-sm font-medium">URL</h3>
            </div>

            {/* Empty state */}
            {redirectUrls.length === 0 && (
              <div className="py-16 px-4 text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <span className="text-3xl text-gray-500">:(</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Aún no hay URL de redirección
                  </h3>
                  <p className="text-gray-400 max-w-md text-center mb-6">
                    Cuando crees una URL de redirección, aparecerá aquí. Las URL de redirección son necesarias para redirigir a los usuarios después de que completen oAuth
                  </p>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center"
                    onClick={() => setShowCreateModal(true)}
                  >
                    <Plus size={16} className="mr-2" />
                    Crear URL de redireccionamiento
                  </button>
                </div>
              </div>
            )}

            {/* URLs list */}
            {redirectUrls.length > 0 && (
              <div className="divide-y divide-[#1c1c1c]">
                {redirectUrls.map((url) => (
                  <div key={url.id} className="p-4 flex items-center justify-between">
                    <a
                      href={url.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {url.url}
                    </a>
                    <button
                      className="text-gray-400 hover:text-white"
                      onClick={() => {
                        // Eliminar URL
                        setRedirectUrls(redirectUrls.filter(u => u.id !== url.id));
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Redirect URL Modal */}
      <CreateRedirectUrlModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateUrl={handleCreateRedirectUrl}
      />
    </DashboardLayout>
  );
}
