export function ProfileDangerZone() {
    return (
      <div className="space-y-4">
        <button className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-white py-3 px-4 rounded-md text-center">
        Cerrar sesión
        </button>
  
        <button className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-white py-3 px-4 rounded-md text-center">
        Cerrar sesión en todos los dispositivos
        </button>
  
        <button className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-red-400 py-3 px-4 rounded-md text-center">
          Eliminar cuenta
        </button>
      </div>
    )
  }
  
  