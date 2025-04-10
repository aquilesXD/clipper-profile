import { useState } from "react";
import { ChevronDown, X, Plus, Link } from "lucide-react";

interface CreateTrackingLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateTrackingLinkModal({ isOpen, onClose }: CreateTrackingLinkModalProps) {
  const [selectedWhop, setSelectedWhop] = useState("amazon");
  const [selectedCampaign, setSelectedCampaign] = useState("Campaña por defecto");
  const [trackingName, setTrackingName] = useState("");
  const [campaignType, setCampaignType] = useState("organic");
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmContent, setUtmContent] = useState("");
  const [utmTerm, setUtmTerm] = useState("");

  if (!isOpen) return null;

  const campaignTypes = [
    { id: "organic", name: "Orgánico" },
    { id: "paid", name: "Pago" },
    { id: "email", name: "Email" },
    { id: "social", name: "Redes sociales" },
    { id: "other", name: "Otro" }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop - transparente cuando se abre desde lateral */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal desde lateral derecho */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#121212] shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-[#1c1c1c] flex justify-between items-center">
            <h2 className="text-xl font-medium text-white">Crear enlace de seguimiento</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Whop */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Whop</label>
              <div className="relative">
                <button className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-left text-white flex justify-between items-center">
                  <span>{selectedWhop}</span>
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>

            {/* Campaña */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Campaña</label>
              <div className="relative">
                <button className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-left text-white flex justify-between items-center">
                  <span>{selectedCampaign}</span>
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>

            {/* Nombre del enlace */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Nombre del enlace</label>
              <input
                type="text"
                placeholder="Nombre descriptivo (ej. Instagram Bio)"
                value={trackingName}
                onChange={(e) => setTrackingName(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
              />
            </div>

            {/* Tipo de campaña */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Tipo</label>
              <div className="grid grid-cols-2 gap-3">
                {campaignTypes.map(type => (
                  <div
                    key={type.id}
                    className={`rounded-md border ${campaignType === type.id ? 'border-blue-500 bg-blue-900/20' : 'border-[#2a2a2a]'} p-3 cursor-pointer`}
                    onClick={() => setCampaignType(type.id)}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${campaignType === type.id ? 'border-blue-500' : 'border-[#444]'}`}>
                        {campaignType === type.id && (
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                      <span className="text-white text-sm">{type.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parámetros UTM */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="block text-white font-medium">Parámetros UTM</label>
                <span className="text-gray-400 text-xs">(Opcional)</span>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm">Fuente (source)</label>
                  <input
                    type="text"
                    placeholder="instagram, facebook, newsletter..."
                    value={utmSource}
                    onChange={(e) => setUtmSource(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm">Medio (medium)</label>
                  <input
                    type="text"
                    placeholder="social, email, cpc..."
                    value={utmMedium}
                    onChange={(e) => setUtmMedium(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm">Campaña (campaign)</label>
                  <input
                    type="text"
                    placeholder="blackfriday, lanzamiento..."
                    value={utmCampaign}
                    onChange={(e) => setUtmCampaign(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm">Contenido (content)</label>
                  <input
                    type="text"
                    placeholder="banner, boton, pie..."
                    value={utmContent}
                    onChange={(e) => setUtmContent(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm">Término (term)</label>
                  <input
                    type="text"
                    placeholder="premium, descuento..."
                    value={utmTerm}
                    onChange={(e) => setUtmTerm(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer con botón de Crear */}
          <div className="p-4 border-t border-[#1c1c1c]">
            <button
              onClick={onClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md flex items-center justify-center"
            >
              <Link size={18} className="mr-2" />
              Crear enlace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
