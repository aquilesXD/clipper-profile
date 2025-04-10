import { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "./DashBoardLayout";
import { BookOpen, ChevronDown, Plus, MoreVertical, ChevronRight } from "lucide-react";
import { InviteTeamMemberModal } from "./InviteTeamMemberModal";
import { TransferOwnershipModal } from "./TransferOwnershipModal";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

export function TeamSettingsContent() {
  const [require2FA, setRequire2FA] = useState(false);
  const [activeTab, setActiveTab] = useState<'miembros' | 'invita'>('miembros');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showActionDropdown, setShowActionDropdown] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  // Sample team member data
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "aquiles gonzalez",
      email: "aquilesbarboza1989@gmail.com",
      role: "Owner",
      status: "Un solo paso"
    }
  ];

  // Handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowActionDropdown(false);
      }
    }

    if (showActionDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showActionDropdown]);

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
          {/* Breadcrumb navigation */}
          <div className="flex items-center text-gray-400 mb-6 text-sm">
            <span>AJUSTES</span>
            <span className="mx-2">&gt;</span>
            <span className="text-white">EQUIPO</span>
          </div>

          {/* 2FA Authentication Section */}
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden mb-8">
            <div className="p-5 border-b border-[#1c1c1c]">
              <h2 className="text-xl font-medium text-white">Autenticación de dos factores</h2>
            </div>

            {/* Require 2FA Toggle */}
            <div className="p-5 flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Exigir 2FA</p>
                <p className="text-gray-400 text-sm">Exija a los miembros de su equipo que activen la autenticación de dos factores para que sus cuentas sean más seguras.</p>
              </div>
              <ToggleSwitch
                checked={require2FA}
                onChange={() => setRequire2FA(!require2FA)}
              />
            </div>
          </div>

          {/* Team Members Section */}
          <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-[#1c1c1c]">
              <button
                className={`px-4 py-3 font-medium text-sm ${activeTab === 'miembros' ? 'text-white border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('miembros')}
              >
                Miembros
              </button>
              <button
                className={`px-4 py-3 font-medium text-sm ${activeTab === 'invita' ? 'text-white border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('invita')}
              >
                Invita
              </button>

              <div className="ml-auto flex items-center px-4">
                <button className="bg-[#1a1a1a] text-white py-2 px-4 rounded-md border border-[#2a2a2a] flex items-center mr-2">
                  <BookOpen size={16} className="mr-2" />
                  Documentación
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center"
                  onClick={() => setShowInviteModal(true)}
                >
                  <Plus size={16} className="mr-2" />
                  Invitar a un miembro del equipo
                </button>
              </div>
            </div>

            {/* Team Members Table */}
            {activeTab === 'miembros' && (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#1c1c1c] text-gray-400 text-sm">
                        <th className="text-left p-4 font-medium">Miembro del equipo</th>
                        <th className="text-left p-4 font-medium">Correo electrónico</th>
                        <th className="text-left p-4 font-medium">Papel</th>
                        <th className="text-left p-4 font-medium">Aut</th>
                        <th className="text-left p-4 font-medium">Pagar</th>
                        <th className="p-4 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member) => (
                        <tr key={member.id} className="border-b border-[#1c1c1c]">
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white mr-3 text-sm">
                                AG
                              </div>
                              <span className="text-white">{member.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-white">{member.email}</td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <span className="bg-[#1a1a1a] text-white py-1 px-3 rounded-md">
                                {member.role}
                              </span>
                              <ChevronDown size={16} className="ml-1 text-white" />
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <span className="bg-yellow-500 text-black py-1 px-3 rounded-md font-medium">
                                {member.status}
                              </span>
                            </div>
                          </td>
                          <td className="p-4">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-1.5 px-4 rounded-md">
                              Pagar
                            </button>
                          </td>
                          <td className="p-4 text-center">
                            <div className="relative inline-block text-left" ref={dropdownRef}>
                              <button
                                className="text-gray-400 hover:text-white focus:outline-none"
                                onClick={(e) => {
                                  // Get button position for dropdown placement
                                  const buttonRect = e.currentTarget.getBoundingClientRect();
                                  setDropdownPosition({
                                    top: buttonRect.bottom + window.scrollY,
                                    left: buttonRect.left + window.scrollX
                                  });

                                  if (selectedMember?.id === member.id && showActionDropdown) {
                                    setShowActionDropdown(false);
                                  } else {
                                    setSelectedMember(member);
                                    setShowActionDropdown(true);
                                  }
                                }}
                                aria-label="More options"
                              >
                                <MoreVertical size={20} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="p-4 flex items-center justify-between text-sm">
                  <div className="text-gray-400">
                    Mostrando 1 a 1 de 1
                  </div>
                  <div className="flex items-center">
                    <button className="text-gray-400 hover:text-white p-2" disabled>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <div className="w-8 h-8 bg-[#1a1a1a] rounded-md flex items-center justify-center text-white mx-1">
                      1
                    </div>
                    <button className="text-gray-400 hover:text-white p-2" disabled>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>

                    <div className="flex items-center ml-4">
                      <span className="text-gray-400 mr-2">Mostrar</span>
                      <div className="relative">
                        <select
                          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-1 pl-2 pr-8 text-white appearance-none"
                          value={itemsPerPage}
                          onChange={(e) => setItemsPerPage(Number(e.target.value))}
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                        </select>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <ChevronDown size={14} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Invite Tab Content */}
            {activeTab === 'invita' && (
              <div className="p-6 max-w-xl">
                <div className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label className="block text-white font-medium mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      placeholder="gilfoyle@piedpiper.com"
                      className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
                    />
                    <p className="text-gray-400 text-sm mt-1">Ingrese la dirección de correo electrónico del usuario que desea invitar a su equipo.</p>
                  </div>

                  {/* Role Selection */}
                  <div>
                    <label className="block text-white font-medium mb-2">Papel</label>
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-left text-white flex justify-between items-center"
                      >
                        <span>Seleccione un rol</span>
                        <ChevronDown size={18} className="text-gray-400" />
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Los roles determinan los permisos específicos que tendrá este miembro del equipo.</p>
                  </div>

                  {/* Permissions Preview */}
                  <div className="bg-[#121212] border border-[#2a2a2a] rounded-md p-4">
                    <h3 className="text-white font-medium mb-3">Permisos incluidos</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Acceso al panel de control</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Ver datos de analytics y métricas</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-2 flex-shrink-0 mt-0.5">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="text-gray-500">Gestionar pagos y facturación</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-2 flex-shrink-0 mt-0.5">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="text-gray-500">Invitar a nuevos miembros del equipo</span>
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
                      Invitar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown Portal - positioned outside the table */}
      {selectedMember && showActionDropdown && (
        <div
          ref={dropdownRef}
          className="fixed z-50 w-48 bg-[#121212] border border-[#242424] rounded shadow-xl"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            transform: 'translateX(-80%)'
          }}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className="w-full text-left px-4 py-2 text-white hover:bg-[#1a1a1a] block text-sm"
              onClick={() => {
                console.log(`Deleting member: ${selectedMember.name}`);
                setShowActionDropdown(false);
              }}
            >
              Eliminar usuario
            </button>
            <button
              className="w-full text-left px-4 py-2 text-white hover:bg-[#1a1a1a] block text-sm"
              onClick={() => {
                setShowActionDropdown(false);
                setShowTransferModal(true);
              }}
            >
              Transferir la propiedad
            </button>
            <button
              className="w-full text-left px-4 py-2 text-white hover:bg-[#1a1a1a] flex items-center justify-between text-sm"
              onClick={() => {
                console.log(`Viewing details for: ${selectedMember.name}`);
                setShowActionDropdown(false);
              }}
            >
              <span>Details</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Invite Team Member Modal */}
      <InviteTeamMemberModal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        onInvite={(email, role) => {
          // Handle the invitation logic here
          console.log(`Inviting ${email} as ${role}`);
          // In a real app, you would call an API here
          setShowInviteModal(false);
        }}
      />

      {/* Transfer Ownership Modal */}
      {selectedMember && (
        <TransferOwnershipModal
          isOpen={showTransferModal}
          onClose={() => setShowTransferModal(false)}
          onConfirm={() => {
            console.log(`Transferring ownership to: ${selectedMember.name}`);
            // In a real app, you would call an API here
            setShowTransferModal(false);
          }}
          memberName={selectedMember.name}
        />
      )}
    </DashboardLayout>
  );
}
