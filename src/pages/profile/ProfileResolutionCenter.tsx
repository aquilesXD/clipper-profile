import { SmileIcon } from "lucide-react";

export function ProfileResolutionCenter() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Tabla responsiva */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-[#2a2a2a]">
              <thead className="bg-[#0c0c0c]">
                <tr>
                  {/* Visible en móvil */}
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-400 sm:pl-0">Razón</th>
                  <th className="py-3.5 px-3 text-left text-sm font-semibold text-gray-400 lg:hidden">Detalles</th>
                  
                  {/* Ocultos en móvil */}
                  <th className="hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-400 lg:table-cell">Estado</th>
                  <th className="hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-400 md:table-cell">Whop</th>
                  <th className="hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-400 lg:table-cell">Cantidad</th>
                  <th className="hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-400 xl:table-cell">Abierto</th>
                  <th className="hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-400 xl:table-cell">Vencimiento</th>
                  <th className="hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-400 xl:table-cell">Cerrado</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      {/* Estado vacío */}
      <div className="flex flex-col items-center justify-center py-12 md:py-24">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#1a1a1a] md:mb-8 md:h-20 md:w-20">
          <SmileIcon className="h-8 w-8 text-gray-400 opacity-75 md:h-10 md:w-10" />
        </div>
        
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-medium text-white md:text-xl">
            Aún no hay casos de resolución
          </h3>
          <p className="max-w-md text-sm text-gray-400 md:text-base">
            Cuando informe un problema con una membresía de Whop, aparecerá aquí.
          </p>
        </div>
      </div>
    </div>
  );
}