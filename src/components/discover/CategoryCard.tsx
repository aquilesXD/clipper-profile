interface CategoryCardProps {
    category: {
      id: number
      name: string
      icon: string
      count: number
    }
  }
  
  export function CategoryCard({ category }: CategoryCardProps) {
    return (
      <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-colors">
        <div className="p-4 text-center">
          <div className="text-2xl mb-2">{category.icon}</div>
          <h3 className="font-medium text-white mb-1">{category.name}</h3>
          <p className="text-xs text-gray-400">{category.count} products</p>
        </div>
      </div>
    )
  }
  
  