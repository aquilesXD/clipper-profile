import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, CreditCard, Building, ChevronsRight, DollarSign, Bitcoin } from "lucide-react";

interface CreatePaymentLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePaymentLinkModal({ isOpen, onClose }: CreatePaymentLinkModalProps) {
  const [selectedPrice, setSelectedPrice] = useState<"free" | "oneTime" | "recurring">("oneTime");
  const [amount, setAmount] = useState("1000");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [selectedRevocation, setSelectedRevocation] = useState("Nunca");
  const [showRevocationDropdown, setShowRevocationDropdown] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState({
    card: true,
    ach: false,
    paypal: false,
    crypto: false
  });

  const currencyDropdownRef = useRef<HTMLDivElement>(null);
  const revocationDropdownRef = useRef<HTMLDivElement>(null);

  // Opciones para los dropdowns
  const revocationOptions = [
    "Nunca",
    "Después de siete días",
    "Al cabo de un mes",
    "Después de tres meses",
    "Después de seis meses",
    "Después de un año",
    "Después de otro # de días..."
  ];

  const currencyOptions = [
    "USD",
    "EUR",
    "GBP",
    "CAD",
    "AUD",
    "JPY",
    "CNY",
    "MXN",
    "BRL"
  ];

  // Cerrar dropdowns cuando se hace clic fuera de ellos
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCurrencyDropdown(false);
      }
      if (
        revocationDropdownRef.current &&
        !revocationDropdownRef.current.contains(event.target as Node)
      ) {
        setShowRevocationDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePaymentMethod = (method: keyof typeof paymentMethods) => {
    setPaymentMethods(prev => ({
      ...prev,
      [method]: !prev[method]
    }));
  };

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
          <div className="p-4 border-b border-[#1c1c1c]">
            <h2 className="text-xl font-medium text-white">Crear enlace de pago</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Whop */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Whop</label>
              <div className="relative">
                <button className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-left text-white flex justify-between items-center">
                  <span>amazon</span>
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>

            {/* Precios */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Precios</label>
              <div className="grid grid-cols-3 gap-3">
                <div
                  className={`rounded-md border ${selectedPrice === 'free' ? 'border-blue-500' : 'border-[#2a2a2a]'} p-3 cursor-pointer`}
                  onClick={() => setSelectedPrice("free")}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPrice === 'free' ? 'border-blue-500' : 'border-[#444]'}`}>
                      {selectedPrice === 'free' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                    <span className="text-white text-sm">Gratis</span>
                  </div>
                </div>

                <div
                  className={`rounded-md border ${selectedPrice === 'oneTime' ? 'border-blue-500 bg-blue-900/20' : 'border-[#2a2a2a]'} p-3 cursor-pointer`}
                  onClick={() => setSelectedPrice("oneTime")}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPrice === 'oneTime' ? 'border-blue-500' : 'border-[#444]'}`}>
                      {selectedPrice === 'oneTime' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                    <span className="text-white text-sm whitespace-nowrap">Una sola vez</span>
                  </div>
                </div>

                <div
                  className={`rounded-md border ${selectedPrice === 'recurring' ? 'border-blue-500' : 'border-[#2a2a2a]'} p-3 cursor-pointer`}
                  onClick={() => setSelectedPrice("recurring")}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPrice === 'recurring' ? 'border-blue-500' : 'border-[#444]'}`}>
                      {selectedPrice === 'recurring' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                    <span className="text-white text-sm">Recurrente</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Precio */}
            {selectedPrice !== 'free' && (
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm">Precio</label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 pl-8 pr-3 text-white"
                    />
                  </div>
                  <div className="relative" ref={currencyDropdownRef}>
                    <button
                      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white flex justify-between items-center min-w-[90px]"
                      onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                    >
                      <span>{selectedCurrency}</span>
                      <ChevronDown size={18} />
                    </button>

                    {/* Currency Dropdown */}
                    {showCurrencyDropdown && (
                      <div className="absolute right-0 mt-1 w-48 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                        {currencyOptions.map((currency) => (
                          <div
                            key={currency}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#242424] ${selectedCurrency === currency ? 'bg-blue-600' : 'text-white'}`}
                            onClick={() => {
                              setSelectedCurrency(currency);
                              setShowCurrencyDropdown(false);
                            }}
                          >
                            {currency}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Detalles */}
            <div className="space-y-4">
              <label className="block text-white font-medium">Detalles</label>

              <div className="space-y-2">
                <label className="block text-gray-300 text-sm">Revocar el acceso automáticamente</label>
                <div className="relative" ref={revocationDropdownRef}>
                  <button
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-left text-white flex justify-between items-center"
                    onClick={() => setShowRevocationDropdown(!showRevocationDropdown)}
                  >
                    <span>{selectedRevocation}</span>
                    <ChevronDown size={18} />
                  </button>

                  {/* Revocation Dropdown */}
                  {showRevocationDropdown && (
                    <div className="absolute left-0 right-0 mt-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                      {revocationOptions.map((option) => (
                        <div
                          key={option}
                          className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#242424] ${selectedRevocation === option ? 'bg-blue-600 text-white' : 'text-white'}`}
                          onClick={() => {
                            setSelectedRevocation(option);
                            setShowRevocationDropdown(false);
                          }}
                        >
                          {option === "Nunca" && (
                            <div className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-white" />
                              {option}
                            </div>
                          )}
                          {option !== "Nunca" && option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300 text-sm">Stock</label>
                <div className="relative">
                  <input
                    type="text"
                    value="Sin límites"
                    readOnly
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 pl-3 pr-10 text-white"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-blue-500">∞</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300 text-sm">Nombre interno</label>
                <input
                  type="text"
                  placeholder="Nombre interno"
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
                />
              </div>
            </div>

            {/* Formas de pago */}
            <div className="space-y-3">
              <label className="block text-white font-medium">Formas de pago</label>

              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`rounded-md border ${paymentMethods.card ? 'border-blue-500 bg-blue-900/20' : 'border-[#2a2a2a]'} p-3 cursor-pointer`}
                  onClick={() => togglePaymentMethod('card')}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-5 h-5 flex items-center justify-center rounded ${paymentMethods.card ? 'bg-blue-500' : 'border border-[#444]'}`}>
                      {paymentMethods.card && <Check size={16} color="white" />}
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                      <CreditCard size={18} />
                      <span className="text-sm">Tarjeta</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`rounded-md border ${paymentMethods.ach ? 'border-blue-500 bg-blue-900/20' : 'border-[#2a2a2a]'} p-3 cursor-pointer`}
                  onClick={() => togglePaymentMethod('ach')}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-5 h-5 flex items-center justify-center rounded ${paymentMethods.ach ? 'bg-blue-500' : 'border border-[#444]'}`}>
                      {paymentMethods.ach && <Check size={16} color="white" />}
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                      <Building size={18} />
                      <span className="text-sm">ACH</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`rounded-md border ${paymentMethods.paypal ? 'border-blue-500 bg-blue-900/20' : 'border-[#2a2a2a]'} p-3 cursor-pointer`}
                  onClick={() => togglePaymentMethod('paypal')}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-5 h-5 flex items-center justify-center rounded ${paymentMethods.paypal ? 'bg-blue-500' : 'border border-[#444]'}`}>
                      {paymentMethods.paypal && <Check size={16} color="white" />}
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                      <DollarSign size={18} />
                      <span className="text-sm">Paypal</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`rounded-md border ${paymentMethods.crypto ? 'border-blue-500 bg-blue-900/20' : 'border-[#2a2a2a]'} p-3 cursor-pointer`}
                  onClick={() => togglePaymentMethod('crypto')}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-5 h-5 flex items-center justify-center rounded ${paymentMethods.crypto ? 'bg-blue-500' : 'border border-[#444]'}`}>
                      {paymentMethods.crypto && <Check size={16} color="white" />}
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                      <Bitcoin size={18} />
                      <span className="text-sm">Cripto</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#242424] rounded-md py-3 px-4 text-left text-white flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-300">🤝</span>
                  <span>Solicitar financiación</span>
                </div>
                <ChevronsRight size={18} />
              </button>
            </div>
          </div>

          {/* Footer con botón de Crear */}
          <div className="p-4 border-t border-[#1c1c1c]">
            <button
              onClick={onClose}
              className="w-full bg-[#242424] hover:bg-[#333] text-white font-medium py-3 rounded-md"
            >
              Cree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
