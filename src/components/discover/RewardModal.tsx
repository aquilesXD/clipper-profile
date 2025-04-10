"use client"

interface RewardModalProps {
  onClose: () => void
}

export function RewardModal({ onClose }: RewardModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#111111] rounded-lg w-full max-w-3xl mx-4">
        <div className="p-6">
          <div className="bg-yellow-100 text-yellow-800 p-3 rounded-xl mb-4">
            <p className="font-medium text-base">
              Submit your post for review within 1 hour of publishing to start getting paid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-gray-400 text-base font-medium mb-1">PAID OUT</p>
              <div className="flex justify-between">
                <p className="text-white text-sm mb-1">$13,45 of $10,000 paid out</p>
                <p className="text-white text-sm mb-1">1%</p>
              </div>
              <div className="h-3 w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                <div className="h-full bg-orange-500 rounded" style={{ width: "1%" }}></div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-base font-medium mb-1">TIME LEFT</p>
              <div className="flex justify-between">
                <p className="text-white text-sm mb-1">56 days left</p>
                <p className="text-white text-sm mb-1">38%</p>
              </div>
              <div className="h-3 w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                <div className="h-full bg-orange-500 rounded" style={{ width: "38%" }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-gray-400 text-xs font-medium mb-1">REWARD</p>
              <div className="bg-gradient-to-b from-[#1754D8] to-[#578CFF] text-white text-xs font-semibold py-1 px-2 rounded w-32 border border-[#2862e2]">
                4.00 US$ / <span className="opacity-60">1 mil</span>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-xs font-medium mb-1">CONTENT TYPE</p>
              <div className="bg-[#1a1a1a] text-white text-xs font-semibold py-1 px-2 rounded w-32">Clipping</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-gray-400 text-base font-medium mb-1">MAX PAID OUT</p>
              <div className="bg-[#1a1a1a] text-white text-xs font-semibold py-1 px-2 rounded w-32">$ 500</div>
            </div>

            <div>
              <p className="text-gray-400 text-base font-medium mb-1">CATEGORY</p>
              <div className="bg-[#1a1a1a] text-white text-xs font-semibold py-1 px-2 rounded w-32">Creator</div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-400 text-base font-medium mb-1">PLATFORMS</p>
            <img
              src="https://assets.whop.com/core/2afe54ae8a904906b22dfce0/_next/static/media/tiktok-logo.b77808fb.svg"
              alt="TikTok Logo"
              className="h-6"
            />
          </div>

          <div className="mt-4">
            <p className="text-gray-400 text-base font-medium mb-1">REQUIREMENTS</p>
            <div className="space-y-2">
              <div className="bg-[#1a1a1a] text-white text-sm font-normal py-1 px-2 rounded text-left">
                Análisis de audiencia objetivo (edad, intereses, ubicación)
              </div>
              <div className="bg-[#1a1a1a] text-white text-sm font-normal py-1 px-2 rounded text-left">
                Elección del formato de anuncio (In-Feed, TopView, Branded Hashtag, Spark Ads)
              </div>
              <div className="bg-[#1a1a1a] text-white text-sm font-normal py-1 px-2 rounded text-left">
                Uso de efectos y sonidos populares
              </div>
              <div className="bg-[#1a1a1a] text-white text-sm font-normal py-1 px-2 rounded text-left">
                Incrementar conversiones (ventas, registros, descargas, etc.)
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white text-lg font-medium">Submit your social media video post</p>
            </div>
            <p className="text-gray-400 text-sm">Share your post link below.</p>

            <p className="text-gray-400 text-sm mt-2">Provide link</p>
            <input
              type="text"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded p-2 text-white"
              placeholder="https://"
            />
          </div>
        </div>

        <div className="p-4 border-t border-[#2a2a2a]">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={onClose}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  )
}

