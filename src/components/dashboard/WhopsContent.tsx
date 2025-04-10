"use client"

import { MoreVertical, ChevronFirst, ChevronLeft, ChevronRight, ChevronLast } from "lucide-react"

export function WhopsContent() {
  // Datos de ejemplo para la tabla
  const whops = [
    {
      id: 1,
      name: "amazon",
      status: "Finalizar la incorporación",
      visibility: "Visible",
      price: "---",
      applications: "Aún no hay aplicaciones",
      totalIncome: "0,00 US$",
      activeUsers: 0,
    },
  ]

  return (
    <div className="px-3 sm:px-4 md:px-6 py-4 w-full max-w-[1200px] mx-auto">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-green-400 text-sm font-medium mb-1">Tus whops</h2>
          <h1 className="text-white text-xl sm:text-2xl font-bold mb-1">
            A continuación encontrará una lista de lo que ofrece a los usuarios en Whop.
          </h1>
        </div>
        <div className="hidden sm:block">
          <img src="/generic-basketball-mascot.png" alt="Whop mascot" className="h-16 w-16" />
        </div>
      </div>

      {/* Tabla de Whops */}
      <div className="bg-[#121212] rounded-lg border border-[#2a2a2a] overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-400 border-b border-[#2a2a2a]">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Visibilidad</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Aplicaciones incluidas</th>
              <th className="px-4 py-3">Todos los ingresos</th>
              <th className="px-4 py-3">Usuarios activos</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {whops.map((whop) => (
              <tr key={whop.id} className="border-b border-[#2a2a2a] text-white">
                <td className="px-4 py-4 font-medium">{whop.name}</td>
                <td className="px-4 py-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded">
                    {whop.status}
                  </button>
                </td>
                <td className="px-4 py-4">
                  <span className="bg-green-900/30 text-green-400 text-xs px-3 py-1 rounded-md">{whop.visibility}</span>
                </td>
                <td className="px-4 py-4">{whop.price}</td>
                <td className="px-4 py-4 text-gray-400">{whop.applications}</td>
                <td className="px-4 py-4">{whop.totalIncome}</td>
                <td className="px-4 py-4">{whop.activeUsers}</td>
                <td className="px-4 py-4">
                  <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginación */}
        <div className="flex justify-between items-center px-4 py-3 border-t border-[#2a2a2a]">
          <div className="text-sm text-gray-400">Mostrando 1 a 1 de 1</div>
          <div className="flex space-x-1">
            <button
              className="text-gray-400 p-1 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              <ChevronFirst className="h-4 w-4" />
            </button>
            <button
              className="text-gray-400 p-1 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              className="text-gray-400 p-1 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              className="text-gray-400 p-1 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              <ChevronLast className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
