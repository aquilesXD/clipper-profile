import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

interface InviteAffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InviteAffiliateModal({ isOpen, onClose }: InviteAffiliateModalProps) {
  const [email, setEmail] = useState("gilfoyle@piedpiper.net");
  const [rewardAmount, setRewardAmount] = useState("10");
  const [rewardType, setRewardType] = useState("fixed"); // fixed or percentage
  const [showRewardTypeDropdown, setShowRewardTypeDropdown] = useState(false);
  const [triggerType, setTriggerType] = useState("first_payment"); // first_payment, recurring
  const [showTriggerTypeDropdown, setShowTriggerTypeDropdown] = useState(false);

  const rewardTypeDropdownRef = useRef<HTMLDivElement>(null);
  const triggerTypeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        rewardTypeDropdownRef.current &&
        !rewardTypeDropdownRef.current.contains(event.target as Node)
      ) {
        setShowRewardTypeDropdown(false);
      }
      if (
        triggerTypeDropdownRef.current &&
        !triggerTypeDropdownRef.current.contains(event.target as Node)
      ) {
        setShowTriggerTypeDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  const rewardTypeOptions = [
    { id: "fixed", name: "Fijo" },
    { id: "percentage", name: "Porcentaje" }
  ];

  const triggerTypeOptions = [
    { id: "first_payment", name: "Primer pago" },
    { id: "recurring", name: "Pagos periódicos" }
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
            <div>
              <h2 className="text-xl font-medium text-white">Invitar a un afiliado</h2>
              <p className="text-gray-400 text-sm mt-1">
                Añada afiliados para ampliar su alcance incentivando a los usuarios para que recomienden su sitio a sus amigos.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Usuario */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Usuario</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white"
              />
              <p className="text-gray-400 text-sm">Puede añadir usuarios por su correo electrónico, nombre de usuario Whop o ID de usuario Whop.</p>
            </div>

            {/* Recompensa */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Recompensa</label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    {rewardType === "fixed" ? "$" : "%"}
                  </span>
                  <input
                    type="text"
                    value={rewardAmount}
                    onChange={(e) => setRewardAmount(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 pl-8 pr-3 text-white"
                  />
                </div>
                <div className="relative" ref={rewardTypeDropdownRef}>
                  <button
                    className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-white flex justify-between items-center min-w-[90px]"
                    onClick={() => setShowRewardTypeDropdown(!showRewardTypeDropdown)}
                  >
                    <span>{rewardType === "fixed" ? "Fijo" : "Porcentaje"}</span>
                    <ChevronDown size={18} />
                  </button>

                  {/* Dropdown para tipo de recompensa */}
                  {showRewardTypeDropdown && (
                    <div className="absolute right-0 mt-1 w-40 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg z-10">
                      {rewardTypeOptions.map((option) => (
                        <div
                          key={option.id}
                          className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#242424] ${rewardType === option.id ? 'bg-blue-600' : 'text-white'}`}
                          onClick={() => {
                            setRewardType(option.id);
                            setShowRewardTypeDropdown(false);
                          }}
                        >
                          {option.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tipo de pago trigger */}
              <div className="relative mt-3" ref={triggerTypeDropdownRef}>
                <button
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2.5 px-3 text-left text-white flex justify-between items-center"
                  onClick={() => setShowTriggerTypeDropdown(!showTriggerTypeDropdown)}
                >
                  <span>{triggerType === "first_payment" ? "Primer pago" : "Pagos periódicos"}</span>
                  <ChevronDown size={18} />
                </button>

                {/* Dropdown para tipo de trigger */}
                {showTriggerTypeDropdown && (
                  <div className="absolute left-0 right-0 mt-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg z-10">
                    {triggerTypeOptions.map((option) => (
                      <div
                        key={option.id}
                        className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#242424] ${triggerType === option.id ? 'bg-blue-600' : 'text-white'}`}
                        onClick={() => {
                          setTriggerType(option.id);
                          setShowTriggerTypeDropdown(false);
                        }}
                      >
                        {option.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-gray-400 text-sm mt-2">Opción de precio a la que debe aplicarse esta recompensa:</p>
            </div>
          </div>

          {/* Footer con botón de Invitar */}
          <div className="p-4 border-t border-[#1c1c1c]">
            <button
              onClick={onClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md"
            >
              Invite a
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
