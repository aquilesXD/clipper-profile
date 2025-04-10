import { useState } from "react";
import { DashboardLayout } from "./DashBoardLayout";
import { BookOpen, Plus, ArrowUpDown } from "lucide-react";
import { CreateWebhookModal } from "./CreateWebhookModal";

type Webhook = {
  id: string;
  url: string;
  apiVersion: string;
  secret: string;
  events: string[];
  createdAt: string;
};

export function WebhooksContent() {
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateWebhook = (url: string, apiVersion: string, events: string[]) => {
    const newWebhook: Webhook = {
      id: Math.random().toString(36).substring(7),
      url,
      apiVersion,
      secret: Math.random().toString(36).substring(2, 15),
      events,
      createdAt: new Date().toISOString()
    };
    setWebhooks([...webhooks, newWebhook]);
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
            <span className="text-white">WEBHOOKS</span>
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
                Crear webhook
              </button>
            </div>
          </div>

          {/* Webhooks Table */}
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-8">
            {/* Table Header */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1c1c1c] text-gray-400 text-sm">
                    <th className="text-left p-4 font-medium">
                      <div className="flex items-center">
                        URL
                        <ArrowUpDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th className="text-left p-4 font-medium">
                      <div className="flex items-center">
                        Versión API
                        <ArrowUpDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th className="text-left p-4 font-medium">
                      <div className="flex items-center">
                        Secreto
                        <ArrowUpDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th className="text-left p-4 font-medium">
                      <div className="flex items-center">
                        Eventos
                        <ArrowUpDown size={14} className="ml-1" />
                      </div>
                    </th>
                    <th className="text-left p-4 font-medium">
                      <div className="flex items-center">
                        Creado
                        <ArrowUpDown size={14} className="ml-1" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty state */}
                  {webhooks.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center py-16">
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center">
                              <span className="text-3xl text-gray-500">:(</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-medium text-white mb-2">Aún no hay webhooks</h3>
                          <p className="text-gray-400 max-w-md text-center">
                            Cuando crees un webhook, aparecerá aquí. Los webhooks son útiles para enviar datos a otros servicios cuando ocurre algo en tu empresa.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}

                  {/* Webhooks list when available */}
                  {webhooks.map((webhook) => (
                    <tr key={webhook.id} className="border-b border-[#1c1c1c] hover:bg-[#121212]">
                      <td className="p-4">
                        <a
                          href={webhook.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          {webhook.url}
                        </a>
                      </td>
                      <td className="p-4 text-white">{webhook.apiVersion}</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <code className="bg-[#121212] text-gray-300 p-1 rounded">{webhook.secret}</code>
                          <button
                            className="ml-2 text-gray-400 hover:text-white"
                            onClick={() => navigator.clipboard.writeText(webhook.secret)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {webhook.events.length > 3 ? (
                            <span className="bg-[#1a1a1a] text-white text-xs py-1 px-2 rounded">
                              {webhook.events.length} eventos
                            </span>
                          ) : (
                            webhook.events.map((event, idx) => (
                              <span key={idx} className="bg-[#1a1a1a] text-white text-xs py-1 px-2 rounded">
                                {event}
                              </span>
                            ))
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-gray-400">
                        {new Date(webhook.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Create Webhook Modal */}
      <CreateWebhookModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateWebhook={handleCreateWebhook}
      />
    </DashboardLayout>
  );
}
