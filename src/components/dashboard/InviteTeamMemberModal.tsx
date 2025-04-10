import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface InviteTeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInvite: (email: string, role: string) => void;
}

export function InviteTeamMemberModal({ isOpen, onClose, onInvite }: InviteTeamMemberModalProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  if (!isOpen) return null;

  const roles = [
    { id: 'admin', name: 'Administrador' },
    { id: 'member', name: 'Miembro' },
    { id: 'viewer', name: 'Visor' }
  ];

  const handleSubmit = () => {
    if (email.trim() && role) {
      onInvite(email, role);
      // Reset form
      setEmail('');
      setRole('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Modal */}
      <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg max-w-md w-full z-10">
        <div className="flex justify-between items-center p-5 border-b border-[#1c1c1c]">
          <h2 className="text-white text-lg font-medium">Invitar a un miembro del equipo</h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-400 mb-2 text-sm">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="gilfoyle@piedpiper.com"
              className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block text-gray-400 mb-2 text-sm">Papel</label>
            <div className="relative">
              <button
                type="button"
                className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-left text-white flex justify-between items-center"
                onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              >
                <span>{role ? roles.find(r => r.id === role)?.name : ''}</span>
                <ChevronDown size={18} className="text-gray-400" />
              </button>

              {showRoleDropdown && (
                <div className="absolute mt-1 w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg z-10">
                  {roles.map((option) => (
                    <div
                      key={option.id}
                      className="px-3 py-2 cursor-pointer hover:bg-[#242424] text-white"
                      onClick={() => {
                        setRole(option.id);
                        setShowRoleDropdown(false);
                      }}
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[#1c1c1c] flex justify-end">
          <button
            className="bg-[#1a1a1a] hover:bg-[#242424] text-white py-2 px-4 rounded-md mr-2"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            onClick={handleSubmit}
            disabled={!email.trim() || !role}
          >
            Invite a
          </button>
        </div>
      </div>
    </div>
  );
}
