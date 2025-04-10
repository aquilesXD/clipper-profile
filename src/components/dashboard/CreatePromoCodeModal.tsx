import { useState } from "react";
import { ChevronDown, X, Tag } from "lucide-react";

interface CreatePromoCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePromoCodeModal({ isOpen, onClose }: CreatePromoCodeModalProps) {
  const [promoCode, setPromoCode] = useState("SUMMER_SALE");
  const [discountType, setDiscountType] = useState<"percentage" | "fixed">("percentage");
  const [discountValue, setDiscountValue] = useState("10");
  const [duration, setDuration] = useState("forever");
  const [hasExpiration, setHasExpiration] = useState(false);
  const [hasRedemptionLimit, setHasRedemptionLimit] = useState(false);
  const [newUsersOnly, setNewUsersOnly] = useState(false);
  const [abandonedUsersOnly, setAbandonedUsersOnly] = useState(false);

  if (!isOpen) return null;

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
            <h2 className="text-xl font-medium text-white">Crear código promocional</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Código */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Código</label>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
              />
              <p className="text-gray-400 text-sm">Este es el código que los usuarios introducirán al pagar</p>
            </div>

            {/* Importe */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Importe</label>
              <div className="flex">
                <input
                  type="text"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(e.target.value)}
                  className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-md py-2.5 px-3 text-white"
                />
                <div className="bg-[#1a1a1a] border border-l-0 border-[#2a2a2a] rounded-r-md p-2.5 text-white min-w-[40px] flex items-center justify-center">
                  {discountType === "percentage" ? "%" : "$"}
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="percentage"
                    checked={discountType === "percentage"}
                    onChange={() => setDiscountType("percentage")}
                    className="w-4 h-4 text-blue-600 bg-[#1a1a1a] border-[#2a2a2a] focus:ring-blue-500"
                  />
                  <label htmlFor="percentage" className="ml-2 text-sm text-white">Porcentaje</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="fixed"
                    checked={discountType === "fixed"}
                    onChange={() => setDiscountType("fixed")}
                    className="w-4 h-4 text-blue-600 bg-[#1a1a1a] border-[#2a2a2a] focus:ring-blue-500"
                  />
                  <label htmlFor="fixed" className="ml-2 text-sm text-white">Importe fijo</label>
                </div>
              </div>
            </div>

            {/* Duración */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Duración</label>
              <div className="relative">
                <button className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-left text-white flex justify-between items-center">
                  <span>Para siempre</span>
                  <ChevronDown size={18} />
                </button>
              </div>
              <p className="text-gray-400 text-sm">Determina durante cuánto tiempo se aplicará el código promocional una vez canjeado.</p>
            </div>

            {/* Fecha de caducidad */}
            <div className="py-3 border-t border-[#1c1c1c]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">Fecha de caducidad del código promocional</p>
                  <p className="text-gray-400 text-xs mt-1">Programar el código promocional para que caduque en una fecha determinada</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={hasExpiration}
                    onChange={(e) => setHasExpiration(e.target.checked)}
                  />
                  <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            {/* Límite de reembolsos */}
            <div className="py-3 border-t border-[#1c1c1c]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">Limitar el número de reembolsos globales</p>
                  <p className="text-gray-400 text-xs mt-1">Limitar el número de veces que se puede canjear este código promocional en todo el mundo</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={hasRedemptionLimit}
                    onChange={(e) => setHasRedemptionLimit(e.target.checked)}
                  />
                  <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            {/* Nuevos usuarios */}
            <div className="py-3 border-t border-[#1c1c1c]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">El código promocional se aplica a los nuevos usuarios</p>
                  <p className="text-gray-400 text-xs mt-1">Limitar el código promocional para que sólo lo utilicen los nuevos usuarios</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={newUsersOnly}
                    onChange={(e) => setNewUsersOnly(e.target.checked)}
                  />
                  <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            {/* Usuarios que han abandonado */}
            <div className="py-3 border-t border-[#1c1c1c]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">El código promocional se aplica a los usuarios dados de baja</p>
                  <p className="text-gray-400 text-xs mt-1">Limitar el código promocional para que sólo lo utilicen los usuarios que han abandonado la empresa.</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={abandonedUsersOnly}
                    onChange={(e) => setAbandonedUsersOnly(e.target.checked)}
                  />
                  <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Footer con botones */}
          <div className="p-4 border-t border-[#1c1c1c] flex gap-3">
            <button
              onClick={onClose}
              className="w-1/2 bg-[#1a1a1a] hover:bg-[#242424] text-white font-medium py-3 rounded-md"
            >
              Cancelar
            </button>
            <button
              onClick={onClose}
              className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md flex items-center justify-center"
            >
              <Tag size={18} className="mr-2" />
              Crear código promocional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
