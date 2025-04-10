import { X } from 'lucide-react';

interface TransferOwnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  memberName: string;
}

export function TransferOwnershipModal({
  isOpen,
  onClose,
  onConfirm,
  memberName
}: TransferOwnershipModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Modal */}
      <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg max-w-md w-full z-10">
        <div className="flex justify-between items-center p-4 border-b border-[#1c1c1c]">
          <h2 className="text-white text-lg font-medium">¿Estás seguro de que quieres transferir la propiedad a este miembro del equipo?</h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-gray-400 text-sm">
            {memberName} tendrá la propiedad de esta empresa y podrá gestionar todos los ajustes y miembros. Esta acción no se puede deshacer.
          </p>
        </div>

        <div className="p-4 border-t border-[#1c1c1c] flex justify-end space-x-3">
          <button
            className="bg-[#1a1a1a] hover:bg-[#242424] text-white py-2 px-4 rounded-md"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
            onClick={onConfirm}
          >
            Transferir la propiedad
          </button>
        </div>
      </div>
    </div>
  );
}
