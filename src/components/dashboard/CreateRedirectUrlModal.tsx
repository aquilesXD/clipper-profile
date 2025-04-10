import { useState } from 'react';
import { X } from 'lucide-react';

interface CreateRedirectUrlModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateUrl: (url: string) => void;
}

export function CreateRedirectUrlModal({ isOpen, onClose, onCreateUrl }: CreateRedirectUrlModalProps) {
  const [url, setUrl] = useState('');

  if (!isOpen) return null;

  const handleCreateUrl = () => {
    if (url.trim() && isValidUrl(url)) {
      onCreateUrl(url);
      setUrl('');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-70" onClick={onClose}></div>

      {/* Modal */}
      <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg w-full max-w-md z-10">
        <div className="flex justify-between items-center p-4 border-b border-[#1c1c1c]">
          <h2 className="text-white text-lg font-medium">Crear URL de redireccionamiento</h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* URL Input */}
          <div>
            <label className="block text-gray-400 mb-2">Redirigir URL</label>
            <input
              type="text"
              placeholder="https://example.com/oauth/callback"
              className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <p className="text-gray-500 text-sm mt-1">
              La URL a la que se redirigirá a los usuarios con el código de autenticación pasado como parámetro.
            </p>
          </div>
        </div>

        <div className="p-4 flex justify-end border-t border-[#1c1c1c]">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
            onClick={handleCreateUrl}
            disabled={!url.trim() || !isValidUrl(url)}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
