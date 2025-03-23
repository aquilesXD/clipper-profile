import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import { CampaignSidebar } from "../../components/layout/CampaignSidebar";
import { Testimonial } from "../../components/Testimonial";
import { FeatureCard } from "../../components/FeatureCard";
import { AudienceCard } from "../../components/AudienceCard";
import { CheckCircle } from "../../components/Icons/CheckCircle";

export default function Campaign() {
  const [message, setMessage] = useState("")

  return (
    <div className="min-h-screen bg-[#121212]">
      <Sidebar />
      <div className="pl-20 lg:pl-24">
        <div className="flex flex-col lg:flex-row">
          <CampaignSidebar/>
          <main className="flex-1 p-4 lg:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <div className="relative w-full max-h-[300px] overflow-hidden rounded-xl">
                  <img
                    src="https://img-v2-prod.whop.com/rEuqtdgmTyTyI2bULxNzKfor_PpwqFmSgZj4FyUWvx0/rs:fit:1280:720/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTI2L3VzZXJfMjE3MzE2OF83NjA0ZmU3OC02MmYwLTQ1ZTctYjFjZS1jNmZlOGVhYzQ3MGQuanBlZw"
                    alt="Brez Scales Clips banner"
                    className="w-full object-cover rounded-xl"
                  />
                </div>

                <div className="mt-8 flex items-center justify-center">
                  <img
                    src="https://img-v2-prod.whop.com/6h3sfg_FqzkV8VtmHQ41wHmNYgK6xQepCrUU9lSl0wI/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAyLTExL3VzZXJfMjE3MzE2OF85NTc2MmVhOS1kZjdhLTQ2OWItODE5YS1lZGI5NTcwZGMwYzguanBlZw"
                    alt="Brez Scales Clips logo"
                    width={24}
                    height={24}
                    className="rounded-md mr-2 border border-white/40"
                  />
                  <span className="font-semibold text-lg text-white">Brez Scales Clips</span>
                </div>

                <div className="max-w-md mx-auto mt-6">
                  <h1 className="text-3xl font-bold leading-tight text-white">
                    Make $5,000/mo Clipping Brez on Your Phone
                  </h1>
                  <p className="mt-3 text-base text-gray-400">
                    Join our team and get paid to clip videos from anywhere.
                  </p>
                  <button className="w-full mt-4 text-base py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    Unete a
                  </button>

                  <div className="mt-6 bg-[#191919] p-6 rounded-lg">
                    <p className="font-semibold text-base text-white">Join 4190 people</p>
                    <div className="flex justify-center -space-x-2 my-3">
                      {[...Array(11)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-[#121212] bg-gray-500 overflow-hidden"
                        >
                          <img
                            src={`https://randomuser.me/api/portraits/men/${i + 1}.jpg`}
                            alt={`User ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-yellow-400 font-medium">4.5 stars (7) ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>

              {/* Testimonials Section */}
              <section className="mt-12">
                <div className="bg-[#191919] p-6 rounded-lg">
                  <h2 className="text-xl font-bold text-center mb-6 text-white">Vea lo que dicen los demás</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Testimonial
                      name="Hamza salah"
                      avatar="https://img-v2-prod.whop.com/Q4wmi1XnAMtamRiVYv2VjWu1wtycEsb-xKw4s8mkNdU/rs:fill:48:48/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTAxL3VzZXJfODI0ODA0MV9lYjIzMjE2Zi1mMDg1LTQxYTgtOWZiNC1jMGYzNjE3OTc5MzEuanBlZw"
                      rating={5}
                      text="Nice community met some solid editors"
                      date="Written 4 mar 2025, 21 days after purchase"
                    />
                    <Testimonial
                      name="Brandon Cherundolo"
                      avatar="https://img-v2-prod.whop.com/EEdRFm5pKsiLiTazX1tmvEFjbAKl7lvSf6IiYYODhPQ/rs:fill:48:48/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTIxL3VzZXJfMTQxNzk3NF9hODYwZmEzMC01YTM4LTQ5ZWYtOThjMi0wODU4MTE4ZTcwMTQuanBlZw"
                      rating={5}
                      text="This is a legit way of making money, I just made $15 from posting a couple videos for a weekly challenge. I've only been doing this for about a month too!"
                      date="Written 24 ene 2025, 11 days after purchase"
                    />
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section className="mt-12">
                <h2 className="text-xl font-bold text-center mb-6 text-white">Esto es lo que obtendra</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureCard
                    icon="https://img-v2-prod.whop.com/X6k_ozpYUY84nlanH6CyRTIRRP3VFwbJ0w593iHJm1o/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF8wZjZiNjBkOS0zYTNiLTRjNjMtOTAxMS1lN2ZmMTE5ZGY5Y2IucG5n"
                    title="START HERE"
                    description="Access expert content that will keep you informed."
                  />
                  <FeatureCard
                    icon="https://img-v2-prod.whop.com/ATB_o4SkpqQ17JObJR73qOPZ0S5Ml2Ghoj02uHuCnrM/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF84NjNiNmE5Mi1mMDJmLTRhODctYjA1Ni1kNmJkYmU4ZjZhMGQucG5n"
                    title="Announcements"
                    description="Receive my most important announcements"
                  />
                  <FeatureCard
                    icon="https://img-v2-prod.whop.com/t2nsZ2c5fWimGc7zTteuJKtcNJc0bkH-NYL4gQNNAd8/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF9lM2E4OGQ5NC0wODAzLTQ3MzUtODY1Zi0yMmQ3MjFmNjJkZmMucG5n"
                    title="Chat"
                    description="Chat in real-time and connect with the other members of our community."
                  />
                  <FeatureCard
                    icon="https://img-v2-prod.whop.com/VM0-qGNwL_UVkqmSBKggerYfYQFLfN_L3tg1zW6hbiE/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF8yODcxNTY3My00M2U3LTRkNzgtYjljMy0wMjc4MWJiNDU4MTMucG5n"
                    title="Courses"
                    description="Learn from a course program designed to help you grow and reach your goals."
                  />
                  <FeatureCard
                    icon="https://img-v2-prod.whop.com/uxJX37zd8NkHDzEDKdt2kTVWBPv-63XskD3XC1c7Hrk/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF9lYzVmNDAwYy00YmEwLTQxOWQtOGQ4Ny04MzZmNDNjYzY1NmEucG5n"
                    title="Rewards"
                    description="Complete tasks that we post and earn cash for them!"
                  />
                  <FeatureCard
                    icon="https://img-v2-prod.whop.com/D7irSMkDrHDiHYoR3voto4vvBNeN-n_hQFhjbboYQho/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTA2L3VzZXJfMjE3MzE2OF8wOWZiOWEzNC01ZmQ1LTQwN2YtYWMzYy00ZTEyODg3YmIxYTYucG5n"
                    title="Questions"
                    description="Share your thoughts and connect with others on topics that matter to you."
                  />
                </div>
              </section>

              {/* About Creator Section */}
              <section className="mt-12">
                <div className="bg-[#191919] p-6 rounded-lg">
                  <div className="max-w-md mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-4 text-white">Saber más sobre mí</h2>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src="https://img-v2-prod.whop.com/ZNfyn20I686dk7hG_ol4kKA8F06b451-f4K3x-lpQFw/rs:fill:80:80/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTI4L3VzZXJfMjc3MzQ5NF8yMmIyYTljYi03ODZjLTRmMGUtOTc2NC0xNTQyMTczMDJlM2EuanBlZw"
                        alt="Rezz profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Rezz</h3>
                    <p className="text-gray-400">@rezzashahabzadeh • Joined Jan 2024</p>
                    <button className="mt-4 text-lg bg-[#2a2a2a] hover:bg-[#333] text-white py-2 px-4 rounded-md">
                      Ver Perfil
                    </button>

                    <div className="mt-6 relative">
                      <textarea
                        className="w-full bg-[#121212] border border-[#313131] rounded-lg p-4 h-24 resize-none text-white"
                        placeholder="Write a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <button className="absolute right-4 top-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
                        <span className="sr-only">Send message</span>
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5l0 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M18 11l-6 -6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M6 11l6 -6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Target Audience Section */}
              <section className="mt-12">
                <h2 className="text-xl font-bold text-center mb-6 text-white">A quien va dirigido</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AudienceCard
                    title="Aspiring Entrepreneurs"
                    description="People who want to make money online in their free time with no upfront investment."
                  />
                  <AudienceCard
                    title="Busy Individuals"
                    description="Those looking for a flexible side hustle they can manage on their phone, without any special equipment."
                  />
                  <AudienceCard
                    title="Hunger Hustlers"
                    description="For those hungry for growth, ready to earn $5k or more ASAP, working on their own terms, from anywhere."
                  />
                  <AudienceCard
                    title="Network Seekers"
                    description="For people who want to connect with high-level individuals, meet some of the most famous names on the internet, and build valuable connections."
                  />
                </div>
              </section>

              {/* Pricing Section */}
              <section className="mt-12">
                <div className="bg-[#191919] p-6 rounded-lg">
                  <div className="max-w-md mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-4 text-white">Precios</h2>
                    <div className="mb-4">
                      <img
                        src="https://img-v2-prod.whop.com/6h3sfg_FqzkV8VtmHQ41wHmNYgK6xQepCrUU9lSl0wI/rs:fill:80:80/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAyLTExL3VzZXJfMjE3MzE2OF85NTc2MmVhOS1kZjdhLTQ2OWItODE5YS1lZGI5NTcwZGMwYzguanBlZw"
                        alt="Brez Scales Clips logo"
                        width={60}
                        height={60}
                        className="rounded-xl mx-auto"
                      />
                      <h3 className="text-2xl font-bold mt-4 text-white">Join Brez Scales Clips</h3>
                      <p className="text-lg font-semibold mt-2 text-white">Free lifetime</p>
                      <button className="w-4/5 py-6 text-lg mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                        Unete a
                      </button>

                      <div className="mt-6 bg-[#121212] rounded-lg">
                        <ul className="divide-y divide-[#2a2a2a] text-left">
                          <li className="p-4 flex items-start gap-3 text-gray-400">
                            <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>Access to start making Money from day 1 clipping videos</span>
                          </li>
                          <li className="p-4 flex items-start gap-3 text-gray-400">
                            <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>Learn to create viral videos that stand out</span>
                          </li>
                          <li className="p-4 flex items-start gap-3 text-gray-400">
                            <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>Work with your favorite brands and creators</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* More Testimonials Section */}
              <section className="mt-12 mb-16">
               <div className="bg-[#191919] p-6 rounded-lg">
                <h2 className="text-xl font-bold text-center mb-6 text-white">Reseñas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Testimonial
                    name="Hamza salah"
                    avatar="https://img-v2-prod.whop.com/Q4wmi1XnAMtamRiVYv2VjWu1wtycEsb-xKw4s8mkNdU/rs:fill:48:48/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAzLTAxL3VzZXJfODI0ODA0MV9lYjIzMjE2Zi1mMDg1LTQxYTgtOWZiNC1jMGYzNjE3OTc5MzEuanBlZw"
                    rating={5}
                    text="Nice community met some solid editors"
                    date="Written 4 mar 2025, 21 days after purchase"
                  />
                  <Testimonial
                    name="Brandon Cherundolo"
                    avatar="https://img-v2-prod.whop.com/EEdRFm5pKsiLiTazX1tmvEFjbAKl7lvSf6IiYYODhPQ/rs:fill:48:48/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI1LTAxLTIxL3VzZXJfMTQxNzk3NF9hODYwZmEzMC01YTM4LTQ5ZWYtOThjMi0wODU4MTE4ZTcwMTQuanBlZw"
                    rating={5}
                    text="This is a legit way of making money, I just made $15 from posting a couple videos for a weekly challenge. I've only been doing this for about a month too!"
                    date="Written 24 ene 2025, 11 days after purchase"
                  />
                </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

