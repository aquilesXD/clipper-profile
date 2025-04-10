import { useState } from 'react';
import { X, Check } from 'lucide-react';

interface CreateWebhookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateWebhook: (url: string, apiVersion: string, events: string[]) => void;
}

export function CreateWebhookModal({ isOpen, onClose, onCreateWebhook }: CreateWebhookModalProps) {
  const [url, setUrl] = useState('');
  const [apiVersion, setApiVersion] = useState('V2');
  const [events, setEvents] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  if (!isOpen) return null;

  const availableEvents = [
    'app_membership_cancel_at_period_end_changed',
    'app_membership_went_invalid',
    'app_membership_went_valid',
    'app_payment_failed',
    'app_payment_succeeded',
    'dispute_created',
    'dispute_updated',
    'membership_cancel_at_period_end_changed',
    'membership_experience_claimed',
    'membership_metadata_updated',
    'membership_went_invalid',
    'membership_went_valid',
    'payment_affiliate_reward_created'
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setEvents([]);
    } else {
      setEvents([...availableEvents]);
    }
    setSelectAll(!selectAll);
  };

  const toggleEvent = (event: string) => {
    if (events.includes(event)) {
      setEvents(events.filter(e => e !== event));
      setSelectAll(false);
    } else {
      setEvents([...events, event]);
      if (events.length + 1 === availableEvents.length) {
        setSelectAll(true);
      }
    }
  };

  const handleCreateWebhook = () => {
    if (url.trim() && isValidUrl(url)) {
      onCreateWebhook(url, apiVersion, events);
      setUrl('');
      setApiVersion('V2');
      setEvents([]);
      setSelectAll(false);
    }
  };

  const isValidUrl = (value: string) => {
    try {
      new URL(value);
      return true;
    } catch (err) {
      return false;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-70" onClick={onClose}></div>

      {/* Modal de lado derecho */}
      <div
        className="bg-[#0c0c0c] border-l border-[#1c1c1c] w-full max-w-md z-10 overflow-auto h-full animate-slide-in-right"
        style={{
          boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#1c1c1c]">
          <h2 className="text-white text-lg font-medium">Crear webhook</h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* URL Input */}
          <div>
            <label className="block text-gray-400 mb-2">URL del punto final</label>
            <input
              type="text"
              placeholder="https://example.com/webhook"
              className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <p className="text-gray-500 text-sm mt-1">
              Esta URL debe aceptar una carga útil sin procesar. Las URL de Discord o Slack no funcionarán.
            </p>
          </div>

          {/* API Version */}
          <div>
            <label className="block text-gray-400 mb-2">Versión API</label>
            <div className="relative">
              <select
                className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white appearance-none"
                value={apiVersion}
                onChange={(e) => setApiVersion(e.target.value)}
              >
                <option value="V2">V2</option>
                <option value="V1">V1</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Events */}
          <div>
            <label className="block text-gray-400 mb-2">Eventos</label>

            {/* Select All Checkbox */}
            <div className="flex items-center mb-4">
              <div
                className={`w-5 h-5 rounded flex items-center justify-center mr-2 cursor-pointer ${selectAll ? 'bg-blue-600' : 'border border-[#2a2a2a] bg-[#121212]'}`}
                onClick={handleSelectAll}
              >
                {selectAll && <Check size={16} className="text-white" />}
              </div>
              <span className="text-white">Todos</span>
            </div>

            {/* Events List */}
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
              {availableEvents.map((event) => (
                <div key={event} className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center mr-2 cursor-pointer ${events.includes(event) ? 'bg-blue-600' : 'border border-[#2a2a2a] bg-[#121212]'}`}
                    onClick={() => toggleEvent(event)}
                  >
                    {events.includes(event) && <Check size={16} className="text-white" />}
                  </div>
                  <span className="text-white">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 flex justify-end border-t border-[#1c1c1c]">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
            onClick={handleCreateWebhook}
            disabled={!url.trim() || !isValidUrl(url) || events.length === 0}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
