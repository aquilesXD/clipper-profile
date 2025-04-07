"use client"

import { useEffect, useState } from "react"

interface VideoTransaction {
  id_user: string
  email: string
  whatsapp_phone: string
  first_name: string
  verified: number
  approved: number
  age: string
  campaign: string
  video_link: string
  views: number
  total_to_pay: string
}

interface Transaction {
  amount: string
  status?: string
  initiated?: string
  expectedDate?: string
  recipient?: string
  rate?: string
  netAmount?: string
  creditType?: string
  postDate?: string
  type?: string
  date?: string
  description?: string
}

const ProfileBalance = () => {
  const [activeTab, setActiveTab] = useState("videos")
  const [payments, setPayments] = useState<VideoTransaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [balance, setBalance] = useState({
    totalDisponible: 0,
    totalEnBreve: 0,
    totalGeneral: 0
  })

  useEffect(() => {
    const controller = new AbortController()
    
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://contabl.net/nova/get-videos-to-pay?email=raul@tellyourpeople.com',
          { signal: controller.signal }
        )

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        
        const data = await response.json()
        setPayments(data.data || [])
        
        // Calcular balances
        const total = data.data.reduce((acc: number, video: VideoTransaction) => {
          return acc + parseFloat(video.total_to_pay)
        }, 0)
        
        setBalance({
          totalDisponible: total * 0.5, // 50% disponible inmediato
          totalEnBreve: total * 0.5,    // 50% en proceso
          totalGeneral: total
        })
        
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [])

  const tableHeaders = {
    videos: ["CAMPAÑA", "VIDEO", "VISTAS", "TOTAL A PAGAR", "ESTADO"],
    deposits: ["IMPORTE", "TASA", "IMPORTE NETO", "ESTADO", "TIPO DE CRÉDITO", "FECHA DE PUBLICACIÓN"],
    deductions: ["IMPORTE", "TIPO", "FECHA", "DESCRIPCIÓN"],
  }

  // Datos de ejemplo para depósitos
  const depositTransactions: Transaction[] = [
    {
      amount: "$200.00",
      rate: "2%",
      netAmount: "$196.00",
      status: "Completado",
      creditType: "Tarjeta",
      postDate: "2024-03-01",
    },
    {
      amount: "$350.75",
      rate: "1.5%",
      netAmount: "$345.49",
      status: "Pendiente",
      creditType: "Transferencia",
      postDate: "2024-03-03",
    },
  ]

  // Datos de ejemplo para deducciones
  const deductionTransactions: Transaction[] = [
    { amount: "$25.00", type: "Comisión", date: "2024-03-01", description: "Comisión por servicio" },
    { amount: "$10.50", type: "Impuesto", date: "2024-02-28", description: "Impuesto sobre ventas" },
  ]

  // Render móvil para videos
  const renderMobileVideoTransaction = (tx: VideoTransaction) => (
    <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-md p-3 mb-3">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{tx.campaign}</span>
         <span className={`px-2 py-1 rounded text-xs ${
          tx.verified === 1 
            ? "bg-green-500/20 text-green-500" 
            : "bg-red-500/20 text-red-500"
        }`}>
          {tx.verified === 1 ? "Verificado" : "No verificado"}
        </span>
        <span className={`px-2 py-1 rounded text-xs ${
          tx.approved === 1 
            ? "bg-blue-500/20 text-blue-500" 
            : "bg-yellow-500/20 text-yellow-500"
        }`}>
          {tx.approved === 1 ? "Aprobado" : "Pendiente"}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="text-gray-500">Vistas:</p>
          <p className="text-white">{tx.views.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-500">Total a pagar:</p>
          <p className="text-white">${parseFloat(tx.total_to_pay).toFixed(2)}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-500">Enlace:</p>
          <a
            href={tx.video_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8c52ff] underline break-all hover:text-[#a67bff]"
          >
            Ver video
          </a>
        </div>
      </div>
    </div>
  )

  // Render móvil para depósitos
  const renderMobileDepositTransaction = (tx: Transaction) => (
    <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-md p-3 mb-3">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{tx.amount}</span>
        <span className={`${tx.status === "Completado" ? "text-green-500" : "text-yellow-500"}`}>
          {tx.status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="text-gray-500">Tasa:</p>
          <p className="text-white">{tx.rate}</p>
        </div>
        <div>
          <p className="text-gray-500">Neto:</p>
          <p className="text-white">{tx.netAmount}</p>
        </div>
        <div>
          <p className="text-gray-500">Tipo:</p>
          <p className="text-white">{tx.creditType}</p>
        </div>
        <div>
          <p className="text-gray-500">Fecha:</p>
          <p className="text-white">{tx.postDate}</p>
        </div>
      </div>
    </div>
  )

  // Render móvil para deducciones
  const renderMobileDeductionTransaction = (tx: Transaction) => (
    <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-md p-3 mb-3">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{tx.amount}</span>
        <span className="text-white">{tx.type}</span>
      </div>
      <div className="text-sm">
        <p className="text-gray-500">Fecha: <span className="text-white">{tx.date}</span></p>
        <p className="text-gray-500 mt-1">Descripción: <span className="text-white">{tx.description}</span></p>
      </div>
    </div>
  )

  if (loading) return <div className="p-4 text-white">Cargando datos de pagos...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-[#0c0c0c]  min-h-screen">
      <div className="bg-[#131313] border border-l-[#8c52ff] border-t-[#1c1c1c] border-r-[#1c1c1c] border-b-[#1c1c1c] border-l-4 mb-6 md:mb-8 p-3 md:p-4 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <p className="text-white text-sm sm:text-base">Configure sus cuentas de pago para cobrar rápidamente.</p>
        <button className="bg-[#8c52ff] hover:bg-[#7a3ef7] text-white rounded px-3 md:px-4 py-2 text-xs sm:text-sm whitespace-nowrap transition-colors">
          Establecer pagos por Clipper
        </button>
      </div>

      <h2 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-white">Balance general</h2>
      <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4 text-white">Resumen del balance</h3>

      <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded mb-6 md:mb-8 overflow-hidden">
        <div className="border-b border-[#1c1c1c]">
          <div className="flex justify-between p-3 md:p-4">
            <div>
              <span className="text-white text-sm sm:text-base block">Disponible ahora</span>
              <span className="text-gray-500 text-xs">Liquidación inmediata</span>
            </div>
            <span className="text-white text-sm sm:text-base">
              ${balance.totalDisponible.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </span>
          </div>
        </div>
        <div className="border-b border-[#1c1c1c]">
          <div className="flex justify-between p-3 md:p-4">
            <div>
              <span className="text-white text-sm sm:text-base block">En proceso</span>
              <span className="text-gray-500 text-xs">Disponible en 7 días</span>
            </div>
            <span className="text-white text-sm sm:text-base">
              ${balance.totalEnBreve.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-between p-3 md:p-4 font-medium bg-[#1a1a1a]">
            <span className="text-white text-sm sm:text-base">Balance total</span>
            <span className="text-white text-sm sm:text-base">
              ${balance.totalGeneral.toLocaleString('en-US', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="flex border-b border-[#1c1c1c] mb-4 overflow-x-auto">
        <button
          className={`py-2 md:py-3 px-3 md:px-4 text-sm sm:text-base font-medium text-white whitespace-nowrap ${
            activeTab === "videos" ? "border-b-2 border-[#8c52ff]" : ""
          }`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
        <button
          className={`py-2 md:py-3 px-3 md:px-4 text-sm sm:text-base font-medium text-white whitespace-nowrap ${
            activeTab === "deposits" ? "border-b-2 border-[#8c52ff]" : ""
          }`}
          onClick={() => setActiveTab("deposits")}
        >
          Depósitos
        </button>
        <button
          className={`py-2 md:py-3 px-3 md:px-4 text-sm sm:text-base font-medium text-white whitespace-nowrap ${
            activeTab === "deductions" ? "border-b-2 border-[#8c52ff]" : ""
          }`}
          onClick={() => setActiveTab("deductions")}
        >
          Deducciones
        </button>
      </div>

      {activeTab === "videos" && (
        <>
          <div className="hidden md:block bg-[#0c0c0c] border border-[#1c1c1c] rounded">
            <table className="w-full">
              <thead className="border-b border-[#1c1c1c]">
                <tr className="text-left text-sm text-gray-500">
                  {tableHeaders.videos.map((header, i) => (
                    <th key={i} className="p-3 font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-white">
                {payments.map((tx, i) => (
                <tr key={i} className="border-b border-[#1c1c1c] hover:bg-[#141414]">
                  <td className="p-3">{tx.campaign}</td>
                  <td className="p-3">
                  <a
                    href={tx.video_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8c52ff] hover:underline"
                  >
                    Ver video
                  </a>
                  </td>
                  <td className="p-3">{tx.views.toLocaleString()}</td>
                  <td className="p-3">${parseFloat(tx.total_to_pay).toFixed(2)}</td>
                  <td className="p-3 space-y-1">
                  <div className="flex flex-col gap-1">
                    <span
                    className={`px-2 py-1 rounded text-sm ${
                      tx.verified === 1
                      ? "text-green-500"
                      : "text-red-500"
                    }`}
                    >
                    {tx.verified === 1 ? "Verificado ✅" : "No verificado ❌"}
                    </span>
                    <span
                    className={`px-2 py-1 rounded text-sm ${
                      tx.approved === 1
                      ? "text-blue-500"
                      : "text-yellow-500"
                    }`}
                    >
                    {tx.approved === 1
                      ? "Aprobado ✔️"
                      : "Pendiente ⏳"}
                    </span>
                  </div>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden">
            {payments.map((tx, i) => renderMobileVideoTransaction(tx))}
          </div>
        </>
      )}

      {activeTab === "deposits" && (
        <>
          <div className="hidden md:block bg-[#0c0c0c] border border-[#1c1c1c] rounded">
            <table className="w-full">
              <thead className="border-b border-[#1c1c1c]">
                <tr className="text-left text-sm text-gray-500">
                  {tableHeaders.deposits.map((header, i) => (
                    <th key={i} className="p-3 font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-white">
                {depositTransactions.map((tx, i) => (
                  <tr key={i} className="border-b border-[#1c1c1c] hover:bg-[#141414]">
                    <td className="p-3">{tx.amount}</td>
                    <td className="p-3">{tx.rate}</td>
                    <td className="p-3">{tx.netAmount}</td>
                    <td className="p-3">{tx.status}</td>
                    <td className="p-3">{tx.creditType}</td>
                    <td className="p-3">{tx.postDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden">
            {depositTransactions.map((tx, i) => renderMobileDepositTransaction(tx))}
          </div>
        </>
      )}

      {activeTab === "deductions" && (
        <>
          <div className="hidden md:block bg-[#0c0c0c] border border-[#1c1c1c] rounded">
            <table className="w-full">
              <thead className="border-b border-[#1c1c1c]">
                <tr className="text-left text-sm text-gray-500">
                  {tableHeaders.deductions.map((header, i) => (
                    <th key={i} className="p-3 font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-white">
                {deductionTransactions.map((tx, i) => (
                  <tr key={i} className="border-b border-[#1c1c1c] hover:bg-[#141414]">
                    <td className="p-3">{tx.amount}</td>
                    <td className="p-3">{tx.type}</td>
                    <td className="p-3">{tx.date}</td>
                    <td className="p-3">{tx.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden">
            {deductionTransactions.map((tx, i) => renderMobileDeductionTransaction(tx))}
          </div>
        </>
      )}
    </div>
  )
}

export default ProfileBalance