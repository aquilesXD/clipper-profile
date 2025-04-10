import { useState } from "react";
import { DashboardLayout } from "./DashBoardLayout";
import { Plus, Settings } from "lucide-react";
import { InviteAffiliateModal } from "./InviteAffiliateModal";


export function AffiliatesContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="mb-8">
              {/* Ilustración de un casco/máscara */}
              <div className="w-64 h-64 relative mx-auto flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Casco/Máscara */}
                  <g transform="translate(50, 30)">
                    {/* Base del casco */}
                    <path d="M10,60 C0,30 0,10 20,0 C40,-10 60,-10 80,0 C100,10 100,30 90,60 C80,80 70,90 50,90 C30,90 20,80 10,60 Z" fill="#FF3E21" />

                    {/* Parte superior del casco (cresta) */}
                    <path d="M15,15 C20,5 40,-5 60,5 C80,15 85,30 85,30 C85,30 90,0 70,-10 C50,-20 30,-10 15,15 Z" fill="#CEFE00" />

                    {/* Aberturas oculares */}
                    <path d="M25,30 C30,20 40,20 50,30 C40,40 30,40 25,30 Z" fill="#0c0c0c" />
                    <path d="M75,30 C70,20 60,20 50,30 C60,40 70,40 75,30 Z" fill="#0c0c0c" />

                    {/* Detalles */}
                    <path d="M20,60 C25,70 35,75 50,75 C65,75 75,70 80,60 C75,70 65,80 50,80 C35,80 25,70 20,60 Z" fill="#D73A1B" />

                    {/* Gota de sudor */}
                    <path d="M80,60 C83,57 86,55 85,50 C84,45 80,40 80,40 C80,40 86,45 87,50 C88,55 85,60 80,60 Z" fill="white" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Consigue tu <span className="text-[#cefe00]">primer</span> afiliado
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">
                Añada afiliados para ampliar su alcance incentivando a los usuarios para que recomienden su sitio a sus amigos.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                className="inline-flex items-center justify-center bg-[#1a1a1a] hover:bg-[#242424] text-white font-medium py-2.5 px-5 rounded-md"
              >
                <Settings size={20} className="mr-2" />
                Establecer afiliados
              </button>

              <button
                onClick={openModal}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md"
              >
                <Plus size={20} className="mr-2" />
                Invitar a un afiliado
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para invitar afiliado */}
      <InviteAffiliateModal isOpen={isModalOpen} onClose={closeModal} />
    </DashboardLayout>
  );
}
