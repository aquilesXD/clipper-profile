export function ForYouTab() {
  return (
    <div className="flex h-full flex-full bg-[#121212] text-white">
      {/* Left panel */}
      <div className="w-[340px] border-r border-[#222] flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold">Whops le gustaba</h2>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32 42C32 37.5817 35.5817 34 40 34H56C60.4183 34 64 37.5817 64 42V74C64 78.4183 60.4183 82 56 82H40C35.5817 82 32 78.4183 32 74V42Z"
                fill="#FF5533"
              />
              <path
                d="M48 34V18M48 18L40 26M48 18L56 26"
                stroke="#FF5533"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="28" cy="42" r="6" fill="#DDFF33" />
              <circle cx="68" cy="42" r="6" fill="#DDFF33" />
              <path d="M32 58H64" stroke="#DDFF33" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <div className="absolute mt-[-90px] ml-[70px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 0L10.2 5.8L16 6.8L11.8 11.2L12.8 16L8 13.6L3.2 16L4.2 11.2L0 6.8L5.8 5.8L8 0Z"
                  fill="#DDFF33"
                />
              </svg>
            </div>
            <div className="absolute mt-[-30px] ml-[10px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 0L10.2 5.8L16 6.8L11.8 11.2L12.8 16L8 13.6L3.2 16L4.2 11.2L0 6.8L5.8 5.8L8 0Z"
                  fill="#DDFF33"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">
            Tus <span className="text-[#DDFF33]">whops favoritos</span>
          </h3>
          <p className="text-gray-400">aparecerán aquí</p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 p-6 flex justify-center">
        <div className="w-[450px]">
          <div className="bg-[#111] rounded-xl overflow-hidden">
            <div className="p-5">
              <h3 className="text-lg font-bold mb-4">Sobre el creador</h3>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-black flex items-center justify-center">
                  <div className="w-8 h-8 text-red-600">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-6h-2v6zm0-8h2V8h-2v2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Official X</h4>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>@officialpicks · Oct 2023</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.59 7l-7-7-7 7H1v10h4.59l7 7 7-7H24V7h-4.41zM15 15.59l-3 3-3-3H4V9h5l3-3 3 3h5v6.59h-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-white mb-6 text-sm">
                Official Picks is a thriving sports betting community with over 10,000 active members, dedicated to
                helping each other grow and achieve their betting goals. Our platform fosters a supportive environment
                where members can learn new tips and tricks daily, backed by expert-level analysis from our
                knowledgeable staff. We take pride in seeing our members reach new heights in their betting strategies.
              </p>

              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Enviar un mensaje al creador..."
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-full py-2 px-4 pr-10 text-white text-sm"
                />
                <button className="absolute right-3 top-2 text-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="px-5 pb-5 space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg">
                Únete gratis
              </button>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#222] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Invitar a la gente
              </button>

              <button className="w-full text-gray-400 font-medium py-2 px-4 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Denunciar whop
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

