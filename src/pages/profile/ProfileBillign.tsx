import { Search } from "lucide-react"

export function ProfileBillign() {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4 text-white">Historial de Facturación</h2>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Órdenes de búsqueda"
          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md py-2 pl-10 pr-4 text-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      <div className="flex flex-col items-center justify-center py-16">
        <div className="mb-4">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z"
              stroke="white"
              strokeWidth="2"
            />
            <path d="M9 12H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 16H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <h3 className="text-lg font-medium mb-2 text-white">Aún no hay pedidos</h3>

        <p className="text-gray-700 text-center text-sm mb-6">Cuando compras un producto en Whop, aparecerá aquí.</p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">Navegar por Clipper</button>
      </div>
    </div>
  )
}

