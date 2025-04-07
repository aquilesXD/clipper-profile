import { TrendingUp } from "lucide-react"

interface LeaderboardCardProps {
  item: {
    id: number
    rank: number
    title: string
    description: string
    image: string
    price: string
    category: string
    members: number
    growth: string
  }
}

export function LeaderboardCard({ item }: LeaderboardCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-colors">
      <div className="p-4 flex items-center">
        <div className="w-8 h-8 flex items-center justify-center bg-[#252525] rounded-full mr-4 flex-shrink-0">
          <span className="text-white font-bold">{item.rank}</span>
        </div>

        <div className="h-12 w-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
          <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-full w-full object-cover" />
        </div>

        <div className="flex-grow mr-4">
          <h3 className="font-medium text-white">{item.title}</h3>
          <p className="text-xs text-gray-400 line-clamp-1">{item.description}</p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center text-green-500 text-sm mb-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>{item.growth}</span>
          </div>
          <span className="text-xs text-gray-400">{item.members.toLocaleString()} members</span>
        </div>
      </div>
    </div>
  )
}

