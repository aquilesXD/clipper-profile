import { useState } from 'react';

export function ProfileMemberships() {
  const [activeTab, setActiveTab] = useState<'active' | 'lifetime' | 'awaiting' | 'inactive'>('active');

  const renderContent = () => {
    switch(activeTab) {
      case 'active':
        return (
          <div className="flex flex-col items-center justify-center py-16">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-taXi2MIppr0L2SKK9g91TM22wt7vH0.png"
              alt="Money pillow illustration"
              className="w-48 h-48 mb-1 object-contain"
            />
            <h3 className="text-2xl font-medium mb-2 text-white">Aún no hay pedidos</h3>
            <p className="text-gray-700 text-center text-sm mb-6">Cuando compre un producto en Whop, aparecerá aquí.</p>
            <div className="text-center">
              <button className="bg-blue-600 mb-1 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Navegar por Clipper
              </button>
            </div>
          </div>
        );
      case 'lifetime':
        return (
          <div className="flex flex-col items-center justify-center py-16">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-taXi2MIppr0L2SKK9g91TM22wt7vH0.png"
              alt="Lifetime memberships"
              className="w-48 h-48 mb-1 object-contain"
            />
            <h3 className="text-2xl font-medium mb-2 text-white">Aún no hay pedidos</h3>
            <p className="text-gray-700 text-center text-sm mb-6">Cuando adquiera un abono vitalicio en Whop, aparecerá aquí.</p>
            <div className="text-center">
              <button className="bg-blue-600 mb-1 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Navegar por Clipper
              </button>
            </div>
          </div>
        );
      case 'awaiting':
        return (
          <div className="flex flex-col items-center justify-center py-16">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-taXi2MIppr0L2SKK9g91TM22wt7vH0.png"
              alt="Pending approvals"
              className="w-48 h-48 mb-1 object-contain"
            />
            <h3 className="text-2xl font-medium mb-2 text-white">Aún no hay pedidos</h3>
            <p className="text-gray-700 text-center text-sm mb-6">Las afiliaciones que requieran aprobación en lista de espera aparecerán aquí</p>
            <div className="text-center">
              <button className="bg-blue-600 mb-1 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Navegar por Clipper
              </button>
            </div>
          </div>
        );
      case 'inactive':
        return (
          <div className="flex flex-col items-center justify-center py-16">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-taXi2MIppr0L2SKK9g91TM22wt7vH0.png"
              alt="Inactive memberships"
              className="w-48 h-48 mb-1 object-contain"
            />
            <h3 className="text-2xl font-medium mb-2 text-white">Aún no hay pedidos</h3>
            <p className="text-gray-700 text-center text-sm mb-6">Las afiliaciones caducadas aparecerán aquí.</p>
            <div className="text-center">
              <button className="bg-blue-600 mb-1 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Navegar por Clipper
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 mb-6">
        <button 
          onClick={() => setActiveTab('active')}
          className={`py-3 px-4 rounded-md ${activeTab === 'active' ? 'bg-[#333333] text-white' : 'bg-[#1a1a1a] text-gray-400'} text-center hover:bg-[#333333] transition-colors`}
        >
          Activo
        </button>
        <button 
          onClick={() => setActiveTab('lifetime')}
          className={`py-3 px-4 rounded-md ${activeTab === 'lifetime' ? 'bg-[#333333] text-white' : 'bg-[#1a1a1a] text-gray-400'} text-center hover:bg-[#333333] transition-colors`}
        >
          De por vida
        </button>
        <button 
          onClick={() => setActiveTab('awaiting')}
          className={`py-3 px-4 rounded-md ${activeTab === 'awaiting' ? 'bg-[#333333] text-white' : 'bg-[#1a1a1a] text-gray-400'} text-center hover:bg-[#333333] transition-colors`}
        >
          En espera de aprobación
        </button>
        <button 
          onClick={() => setActiveTab('inactive')}
          className={`py-3 px-4 rounded-md ${activeTab === 'inactive' ? 'bg-[#333333] text-white' : 'bg-[#1a1a1a] text-gray-400'} text-center hover:bg-[#333333] transition-colors`}
        >
          Inactivo
        </button>
      </div>

      {renderContent()}

    </div>
  );
}