"use client"
import { StatisticsCard } from "./StatisticsCard"
import { StatisticsFilters } from "./StatisticsFilters"

export function StatisticsSection() {
  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-3">Estadísticas</h2>

      <StatisticsFilters />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-5">
        <StatisticsCard title="Ingresos brutos" value="0 US$" noDataMessage="No hay datos disponibles" />
        <StatisticsCard title="Tasa de conversión" value="0 %" noDataMessage="No hay datos disponibles" />
        <StatisticsCard title="Nuevos usuarios" value="0" noDataMessage="No hay datos disponibles" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-5">
        <StatisticsCard title="MRR" value="0 US$" noDataMessage="No hay datos disponibles" />
        <StatisticsCard title="ARR" value="0 US$" noDataMessage="No hay datos disponibles" />
        <StatisticsCard title="Páginas visitadas" value="0" noDataMessage="No hay datos disponibles" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-5">
        <StatisticsCard title="Tasa de rotación" value="0 %" noDataMessage="No hay datos disponibles" />
        <StatisticsCard title="Desglose de pagos" value="" noDataMessage="No hay datos disponibles" />
        <StatisticsCard
          title="Usuarios con aplicación instalada"
          value="0"
          subtext="de 0 usuarios activos totales"
          noDataMessage=""
          showLargeNumber={true}
        />
      </div>
    </div>
  )
}

