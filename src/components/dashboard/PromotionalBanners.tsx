export function PromotionalBanners() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-6">
      <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] relative overflow-hidden">
        <div className="relative z-10">
          <div className="bg-yellow-400/20 text-yellow-400 text-xs px-3 py-1 rounded-full inline-block mb-2">
            New "Content Rewards" app
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">
            Pay your users to repost your content.
            <br />
            Only pay for the views they generate.
          </h3>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1.5 rounded-md text-xs font-medium mt-2">
            Learn more
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3">
          <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-r from-[#1a1a1a] to-transparent"></div>
          <div className="absolute right-0 top-0 w-full h-full opacity-30">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFDD00"
                d="M47.5,-61.2C59.9,-52.8,67.5,-36.6,71.5,-19.9C75.5,-3.2,75.9,14,69.2,27.7C62.5,41.4,48.8,51.6,34.2,58.9C19.6,66.2,4.1,70.6,-12.4,70.1C-28.9,69.6,-46.5,64.2,-58.4,52.4C-70.3,40.7,-76.5,22.6,-76.3,4.8C-76,-13,-69.3,-30.7,-57.8,-43.1C-46.3,-55.5,-30,-62.6,-13.8,-64.9C2.4,-67.2,18.6,-64.7,32.7,-61.1C46.8,-57.5,58.8,-52.8,47.5,-61.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] relative overflow-hidden">
        <div className="relative z-10">
          <div className="bg-green-400/20 text-green-400 text-xs px-3 py-1 rounded-full inline-block mb-2">
            Get paid to post
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">
            Post about whop on social media and
            <br />
            get paid for the views you generate
          </h3>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1.5 rounded-md text-xs font-medium mt-2">
            Get started
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3">
          <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-r from-[#1a1a1a] to-transparent"></div>
          <div className="absolute right-0 top-0 w-full h-full opacity-30">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#4ADE80"
                d="M47.5,-61.2C59.9,-52.8,67.5,-36.6,71.5,-19.9C75.5,-3.2,75.9,14,69.2,27.7C62.5,41.4,48.8,51.6,34.2,58.9C19.6,66.2,4.1,70.6,-12.4,70.1C-28.9,69.6,-46.5,64.2,-58.4,52.4C-70.3,40.7,-76.5,22.6,-76.3,4.8C-76,-13,-69.3,-30.7,-57.8,-43.1C-46.3,-55.5,-30,-62.6,-13.8,-64.9C2.4,-67.2,18.6,-64.7,32.7,-61.1C46.8,-57.5,58.8,-52.8,47.5,-61.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

