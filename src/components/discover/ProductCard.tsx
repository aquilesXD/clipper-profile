import { Star } from "lucide-react"

interface ProductCardProps {
  product: {
    id: number
    title: string
    description: string
    image: string
    price: string
    category: string
    rating: number
    reviews: number
    members: number
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-colors">
      <div className="p-4">
        <div className="flex items-start mb-3">
          <div className="h-12 w-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="font-medium text-white">{product.title}</h3>
            <p className="text-xs text-gray-400">{product.category}</p>
          </div>
        </div>

        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-sm text-white">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>

          <span className="text-sm font-medium text-white">{product.price}</span>
        </div>

        <div className="mt-3 pt-3 border-t border-[#2a2a2a] flex justify-between items-center">
          <span className="text-xs text-gray-400">{product.members.toLocaleString()} members</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 rounded">Join</button>
        </div>
      </div>
    </div>
  )
}

