import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Transaction {
  amount: string;
  status: string;
  initiated: string;
  expectedDate: string;
  recipient: string;
}

const ProfileBalance = () => {
  const [activeTab, setActiveTab] = useState('withdrawals');

  const withdrawalTransactions: Transaction[] = [
    { amount: "$150.00", status: "Pendiente", initiated: "2024-03-01", expectedDate: "2024-03-05", recipient: "Juan Pérez" },
    { amount: "$320.50", status: "Completado", initiated: "2024-02-20", expectedDate: "2024-02-25", recipient: "María Gómez" },
    { amount: "$75.25", status: "En proceso", initiated: "2024-03-02", expectedDate: "2024-03-07", recipient: "Carlos Rodríguez" },
    { amount: "$210.80", status: "Cancelado", initiated: "2024-02-28", expectedDate: "2024-03-03", recipient: "Ana López" },
    { amount: "$99.99", status: "Pendiente", initiated: "2024-03-03", expectedDate: "2024-03-08", recipient: "Ricardo Díaz" },
  ];

  const tableHeaders = {
    withdrawals: ["IMPORTE", "ESTADO", "INICIADO", "FECHA PREVISTA", "ENVIADO A:"],
    deposits: ["IMPORTE", "TASA", "IMPORTE NETO", "ESTADO", "TIPO DE CREDITO", "FECHA DE PUBLICACIÓN"],
    deductions: ["IMPORTE", "TIPO", "FECHA", "DESCRIPCIÓN"]
  };

  // Function to render mobile-friendly transaction card
  const renderMobileTransaction = (tx: Transaction) => (
    <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded-md p-3 mb-3">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{tx.amount}</span>
        <span className={`
          ${tx.status === 'Completado' ? 'text-green-500' : ''}
          ${tx.status === 'Pendiente' ? 'text-yellow-500' : ''}
          ${tx.status === 'En proceso' ? 'text-blue-500' : ''}
          ${tx.status === 'Cancelado' ? 'text-red-500' : ''}
        `}>{tx.status}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="text-gray-500">Iniciado:</p>
          <p className="text-white">{tx.initiated}</p>
        </div>
        <div>
          <p className="text-gray-500">Fecha prevista:</p>
          <p className="text-white">{tx.expectedDate}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-500">Enviado a:</p>
          <p className="text-white">{tx.recipient}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="bg-[#131313] border border-l-[#8c52ff] border-t-[#1c1c1c] border-r-[#1c1c1c] border-b-[#1c1c1c] border-l-4 mb-6 md:mb-8 p-3 md:p-4 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <p className="text-white text-sm sm:text-base">Configure sus cuentas de pago para cobrar rápidamente.</p>
        <button className="bg-[#8c52ff] hover:bg-[#7a3ef7] text-white rounded px-3 md:px-4 py-2 text-xs sm:text-sm whitespace-nowrap">
          Establecer pagos por Clipper
        </button>
      </div>

      <h2 className="text-lg md:text-xl font-medium mb-3 md:mb-4">Balance general</h2>
      <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Resumen del balance</h3>

      <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded mb-6 md:mb-8 overflow-hidden">
        <div className="border-b border-[#1c1c1c]">
          <div className="flex justify-between p-3 md:p-4">
            <span className="text-white text-sm sm:text-base">Disponible para pagar a su banco</span>
            <span className="text-white text-sm sm:text-base">0,00 US$</span>
          </div>
        </div>
        <div className="border-b border-[#1c1c1c]">
          <div className="flex justify-between p-3 md:p-4">
            <span className="text-white text-sm sm:text-base">Disponible para pagar en breve</span>
            <span className="text-white text-sm sm:text-base">0,00 US$</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between p-3 md:p-4 font-medium">
            <span className="text-white text-sm sm:text-base">Total</span>
            <span className="text-white text-sm sm:text-base">0,00 US$</span>
          </div>
        </div>
      </div>

      <div className="flex border-b border-[#1c1c1c] mb-4 overflow-x-auto">
        <button
          className={`py-2 md:py-3 px-3 md:px-4 text-sm sm:text-base font-medium text-white whitespace-nowrap ${activeTab === 'withdrawals' ? 'border-b-2 border-white' : ''}`}
          onClick={() => setActiveTab('withdrawals')}
        >
          Retiradas
        </button>
        <button
          className={`py-2 md:py-3 px-3 md:px-4 text-sm sm:text-base font-medium text-white whitespace-nowrap ${activeTab === 'deposits' ? 'border-b-2 border-white' : ''}`}
          onClick={() => setActiveTab('deposits')}
        >
          Depósito
        </button>
        <button
          className={`py-2 md:py-3 px-3 md:px-4 text-sm sm:text-base font-medium text-white whitespace-nowrap ${activeTab === 'deductions' ? 'border-b-2 border-white' : ''}`}
          onClick={() => setActiveTab('deductions')}
        >
          Deducciones
        </button>
      </div>

      {activeTab === 'withdrawals' && (
        <>
          {/* Desktop table view - hidden on mobile */}
          <div className="hidden md:block bg-[#0c0c0c] border border-[#1c1c1c] rounded">
            <table className="w-full">
              <thead className="border-b border-[#1c1c1c] text-left text-xs text-gray-500">
                <tr>
                  {tableHeaders.withdrawals.map((header, i) => (
                    <th key={i} className="p-3">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-white">
                {withdrawalTransactions.map((tx, i) => (
                  <tr key={i} className="border-b border-[#1c1c1c]">
                    <td className="p-3">{tx.amount}</td>
                    <td className="p-3">{tx.status}</td>
                    <td className="p-3">{tx.initiated}</td>
                    <td className="p-3">{tx.expectedDate}</td>
                    <td className="p-3">{tx.recipient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card view - visible only on mobile */}
          <div className="md:hidden">
            {withdrawalTransactions.map((tx, i) => renderMobileTransaction(tx))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileBalance;
