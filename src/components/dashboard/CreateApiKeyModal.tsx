import { useState } from 'react';
import { X, ChevronUp, ChevronDown, Check } from 'lucide-react';

interface CreateApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateKey: (name: string, permissions: string[]) => void;
}

export function CreateApiKeyModal({ isOpen, onClose, onCreateKey }: CreateApiKeyModalProps) {
  const [keyName, setKeyName] = useState('');
  const [permissions, setPermissions] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    product: true,
    plan: true,
    membership: true,
  });

  if (!isOpen) return null;

  const productPermissions = [
    "Update Product",
    "Retrieve Product",
    "List Products"
  ];

  const planPermissions = [
    "Create Quick Link",
    "Create Plan",
    "Update Plan",
    "Retrieve Plan",
    "List Plans"
  ];

  const membershipPermissions = [
    "List Licenses",
    "Validate License",
    "Update Membership",
    "Cancel Membership",
    "Terminate Membership",
    "Add Free Days Membership"
  ];

  const allPermissions = [...productPermissions, ...planPermissions, ...membershipPermissions];

  const toggleSelectAll = () => {
    if (selectAll) {
      setPermissions([]);
    } else {
      setPermissions(allPermissions);
    }
    setSelectAll(!selectAll);
  };

  const toggleSection = (section: 'product' | 'plan' | 'membership') => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const togglePermission = (permission: string) => {
    const newPermissions = permissions.includes(permission)
      ? permissions.filter(p => p !== permission)
      : [...permissions, permission];

    setPermissions(newPermissions);
    setSelectAll(newPermissions.length === allPermissions.length);
  };

  const handleCreateKey = () => {
    if (keyName.trim()) {
      onCreateKey(keyName, permissions);
      setKeyName('');
      setPermissions([]);
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
          <h2 className="text-white text-lg font-medium">Crear clave API</h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-gray-400 mb-2">Nombre</label>
            <input
              type="text"
              placeholder="Mi clave API"
              className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
            />
          </div>

          {/* Permissions */}
          <div>
            <label className="block text-gray-400 mb-2">Permisos</label>

            {/* Select All Checkbox */}
            <div className="flex items-center mb-4">
              <div
                className={`w-5 h-5 rounded flex items-center justify-center mr-2 cursor-pointer ${selectAll ? 'bg-blue-600' : 'border border-[#2a2a2a] bg-[#121212]'}`}
                onClick={toggleSelectAll}
              >
                {selectAll && <Check size={16} className="text-white" />}
              </div>
              <span className="text-white">Todos</span>
            </div>

            {/* PRODUCT Section */}
            <div className="mb-3 border border-[#2a2a2a] rounded-md overflow-hidden">
              <div
                className="bg-[#121212] p-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('product')}
              >
                <span className="text-gray-300 font-medium">PRODUCT</span>
                {expandedSections.product ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
              </div>

              {expandedSections.product && (
                <div className="p-3 space-y-2 border-t border-[#2a2a2a]">
                  {productPermissions.map(permission => (
                    <div key={permission} className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center mr-2 cursor-pointer ${permissions.includes(permission) ? 'bg-blue-600' : 'border border-[#2a2a2a] bg-[#121212]'}`}
                        onClick={() => togglePermission(permission)}
                      >
                        {permissions.includes(permission) && <Check size={16} className="text-white" />}
                      </div>
                      <span className="text-white">{permission}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* PLAN Section */}
            <div className="mb-3 border border-[#2a2a2a] rounded-md overflow-hidden">
              <div
                className="bg-[#121212] p-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('plan')}
              >
                <span className="text-gray-300 font-medium">PLAN</span>
                {expandedSections.plan ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
              </div>

              {expandedSections.plan && (
                <div className="p-3 space-y-2 border-t border-[#2a2a2a]">
                  {planPermissions.map(permission => (
                    <div key={permission} className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center mr-2 cursor-pointer ${permissions.includes(permission) ? 'bg-blue-600' : 'border border-[#2a2a2a] bg-[#121212]'}`}
                        onClick={() => togglePermission(permission)}
                      >
                        {permissions.includes(permission) && <Check size={16} className="text-white" />}
                      </div>
                      <span className="text-white">{permission}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* MEMBERSHIP Section */}
            <div className="mb-3 border border-[#2a2a2a] rounded-md overflow-hidden">
              <div
                className="bg-[#121212] p-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('membership')}
              >
                <span className="text-gray-300 font-medium">MEMBERSHIP</span>
                {expandedSections.membership ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
              </div>

              {expandedSections.membership && (
                <div className="p-3 space-y-2 border-t border-[#2a2a2a]">
                  {membershipPermissions.map(permission => (
                    <div key={permission} className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center mr-2 cursor-pointer ${permissions.includes(permission) ? 'bg-blue-600' : 'border border-[#2a2a2a] bg-[#121212]'}`}
                        onClick={() => togglePermission(permission)}
                      >
                        {permissions.includes(permission) && <Check size={16} className="text-white" />}
                      </div>
                      <span className="text-white">{permission}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 flex justify-end border-t border-[#1c1c1c]">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
            onClick={handleCreateKey}
            disabled={!keyName.trim()}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
