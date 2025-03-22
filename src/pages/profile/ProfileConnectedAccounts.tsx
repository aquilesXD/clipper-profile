import { Plus } from 'lucide-react';

const ProfileConnectedAccounts = () => {
  const socialAccounts = [
    {
      name: 'TikTok',
      icon: 'https://whop.com/_next/image/?url=https%3A%2F%2Fassets.whop.com%2Fcore%2F2afe54ae8a904906b22dfce0%2F_next%2Fstatic%2Fmedia%2Ftiktok-logo.ad4c81d6.png&w=32&q=75',
      enabled: true,
    },
    {
      name: 'Discord',
      icon: 'https://whop.com/_next/image/?url=https%3A%2F%2Fassets.whop.com%2Fcore%2F2afe54ae8a904906b22dfce0%2F_next%2Fstatic%2Fmedia%2Fdiscord-logo.844a0266.png&w=32&q=75',
      enabled: true,
    },
    {
      name: 'Solana',
      icon: 'https://assets.whop.com/core/2afe54ae8a904906b22dfce0/_next/static/media/solana-logo.253cb587.svg',
      enabled: true,
    },
    {
      name: 'Telegram',
      icon: 'https://whop.com/_next/image/?url=https%3A%2F%2Fassets.whop.com%2Fcore%2F2afe54ae8a904906b22dfce0%2F_next%2Fstatic%2Fmedia%2Ftelegram-logo.d26c98e6.png&w=32&q=75',
      enabled: true,
    },
    {
      name: 'Instagram',
      icon: 'https://whop.com/_next/image/?url=https%3A%2F%2Fassets.whop.com%2Fcore%2F2afe54ae8a904906b22dfce0%2F_next%2Fstatic%2Fmedia%2Finstagram-logo.1c9d71ab.png&w=32&q=75',
      enabled: true,
    },
    {
      name: 'Youtube',
      icon: 'https://whop.com/_next/image/?url=https%3A%2F%2Fassets.whop.com%2Fcore%2F2afe54ae8a904906b22dfce0%2F_next%2Fstatic%2Fmedia%2Fyoutube-logo.c3dc7114.png&w=32&q=75',
      enabled: true,
    },
    {
      name: 'X',
      icon: 'https://assets.whop.com/core/2afe54ae8a904906b22dfce0/_next/static/media/x-logo.334354ac.svg',
      enabled: true,
    },
    {
      name: 'TrandingView',
      icon: 'https://whop.com/_next/image/?url=https%3A%2F%2Fassets.whop.com%2Fcore%2F2afe54ae8a904906b22dfce0%2F_next%2Fstatic%2Fmedia%2Ftrading-view-logo.08966ff8.png&w=32&q=75',
      enabled: true,
    },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <h1 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Cuentas conectadas</h1>

      <div className="bg-[#0c0c0c] border border-[#1c1c1c] rounded p-5 sm:p-8 md:p-10 flex justify-center items-center">
        <p className="text-gray-500 text-base sm:text-lg">No hay cuentas conectadas</p>
      </div>

      <h2 className="text-lg sm:text-xl font-medium mt-6 sm:mt-8 mb-4 sm:mb-6">Agregar una nueva cuenta</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {socialAccounts.map((account, i) => (
          <div
            key={i}
            className="bg-[#0c0c0c] hover:bg-[#141414] border border-[#1c1c1c] hover:border-[#333] rounded flex items-center p-3 transition-colors cursor-pointer"
          >
            <div className="flex items-center flex-1 overflow-hidden">
              <img
                src={account.icon}
                alt={account.name}
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0"
              />
              <span className="text-sm sm:text-base truncate">{account.name}</span>
            </div>
            <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0 ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileConnectedAccounts;
