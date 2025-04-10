import { MoreVertical, ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react"
import { DashboardLayout } from "./DashBoardLayout"

interface WhopData {
  id: string
  name: string
  status: "pendiente" | "activo"
  visibility: "visible" | "oculto"
  price: string
  applications: string
  income: string
  activeUsers: number
}

export function WhopsContent() {
  // Datos de muestra
  const whopData: WhopData[] = [
    {
      id: "1",
      name: "amazon",
      status: "pendiente",
      visibility: "visible",
      price: "---",
      applications: "Aún no hay aplicaciones",
      income: "0,00 US$",
      activeUsers: 0,
    },
  ]

  const content = (
    <div className="px-4 md:px-6 py-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-medium text-white mb-2">Tus whops</h2>
          <p className="text-gray-400 text-sm">
            A continuación encontrará una lista de lo que ofrece a los usuarios en Whop.
          </p>
        </div>

        {/* Tabla */}
        <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#1c1c1c]">
              <thead className="bg-[#0c0c0c]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Visibilidad
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Precio
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Aplicaciones incluidas
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Todos los ingresos
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Usuarios activos
                  </th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-[#0c0c0c] divide-y divide-[#1c1c1c]">
                {whopData.map((whop) => (
                  <tr key={whop.id} className="hover:bg-[#151515]">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-white">{whop.name}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {whop.status === "pendiente" ? (
                        <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-md">
                          Finalizar la incorporación
                        </button>
                      ) : (
                        <span className="text-sm text-white">Activo</span>
                      )}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-400">
                        Visible
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-white">{whop.price}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-white">{whop.applications}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-white">{whop.income}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-white">{whop.activeUsers}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <button className="text-gray-400 hover:text-white">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-[#1c1c1c] px-4 py-3 flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Mostrando 1 a 1 de 1
            </div>
            <div className="flex space-x-1">
              <button className="p-1 rounded-md hover:bg-[#1c1c1c] text-gray-400">
                <ChevronFirst size={16} />
              </button>
              <button className="p-1 rounded-md hover:bg-[#1c1c1c] text-gray-400">
                <ChevronLeft size={16} />
              </button>
              <button className="p-1 rounded-md hover:bg-[#1c1c1c] text-gray-400">
                <ChevronRight size={16} />
              </button>
              <button className="p-1 rounded-md hover:bg-[#1c1c1c] text-gray-400">
                <ChevronLast size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <DashboardLayout>{content}</DashboardLayout>;
}
