import { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import Sidebar from "./layout/Sidebar"
import { CreateModal } from "./CreateModal"


export default function Home() {
  const [postText, setPostText] = useState("")
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  
  // Usuario de ejemplo
  const user = {
    initials: "AG",
    name: "Usuario",
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="ml-16 w-full bg-[#191919]  max-w-md border-r border-[#222222]">
        <div className="p-4 border-b  border-[#222222]">
          <h1 className="text-xl font-bold">¿Qué pasa?</h1>
        </div>

        {/* Área de creación de post */}
        <div className="p-4">
          <div className="flex items-center gap-3 bg-[#121212] rounded-full py-2 px-3">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm">
              {user.initials}
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="¿Qué estás creando?"
                className="w-full bg-transparent border-none outline-none text-white text-sm"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
            </div>
            <button
              className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Área de contenido (vacía por ahora) */}
        <div className="min-h-[calc(100vh-120px)] bg-[#121212]">{/* Aquí irían las publicaciones */}</div>
      </div>

      {/* Área derecha (vacía en la imagen) */}
      <div className="flex-1 hidden md:block">{/* Contenido adicional podría ir aquí */}</div>
      {/* Modal de creación */}
      <CreateModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  )
}
