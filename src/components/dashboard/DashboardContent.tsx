"use client"
import { PromotionalBanners } from "./PromotionalBanners"
import { DailyMetrics } from "./DailyMetrics"
import { StatisticsSection } from "./StatisticsSection"

export function DashboardContent() {
  return (
    <div className="px-3 sm:px-4 md:px-6 py-4 w-full max-w-[1200px] mx-auto">
      <PromotionalBanners />
      <div>
        <h2 className="text-lg font-bold text-white mb-3">Hoy</h2>
        <DailyMetrics />
      </div>
      <StatisticsSection />
    </div>
  )
}

