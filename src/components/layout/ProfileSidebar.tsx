import { Link, useLocation } from 'react-router-dom';
import { Settings, Link2, ShieldCheck, CreditCard, DollarSign, User, Clock, Flag, AlertTriangle } from 'lucide-react';

interface ProfileSidebarProps {
  mobile?: boolean;
}

const ProfileSidebar = ({ mobile = false }: ProfileSidebarProps) => {
  const location = useLocation();
  const path = location.pathname;
  
  const menuItems = [
    {
      title: 'General',
      icon: <Settings size={18} strokeWidth={1.75} />,
      path: '/profile',
    },
    {
      title: 'Cuentras conectadas',
      icon: <Link2 size={18} strokeWidth={1.75} />,
      path: '/profile-cuentas',
    },
    {
      title: 'Seguridad',
      icon: <ShieldCheck size={18} strokeWidth={1.75} />,
      path: '/profile-seguridad',
    },
    {
      title: 'Formas de pago',
      icon: <CreditCard size={18} strokeWidth={1.75} />,
      path: '/profile-formas-de-pago',
    },
    {
      title: 'Saldo',
      icon: <DollarSign size={18} strokeWidth={1.75} />,
      path: '/profile-saldo',
    },
    {
      title: 'Historial de Facturación',
      icon: <Clock size={18} strokeWidth={1.75} />,
      path: '/profile-facturacion',
    },
    {
      title: 'Membresías',
      icon: <User size={18} strokeWidth={1.75} />,
      path: '/profile-membresias',
    },
    {
      title: 'Centro de Resoluciones',
      icon: <Flag size={18} strokeWidth={1.75} />,
      path: '/profile-resolucion',
    },
    {
      title: 'Zona de Peligro',
      icon: <AlertTriangle size={18} strokeWidth={1.75} />,
      path: '/profile-peligro',
    },
    
  ];
  
  return (
    <div className="h-full bg-[#0c0c0c]">
      <div className={`flex flex-col items-center ${mobile ? 'px-2 py-4' : 'p-5 pb-6'} border-b border-[#1c1c1c]`}>
        <div className={`mb-3 rounded-full ${mobile ? 'w-[60px] h-[60px]' : 'w-[80px] h-[80px]'} overflow-hidden`}>
          <img
            src="https://img-v2-prod.whop.com/P7zijbYXscmr8fmVmS7GZh2oLEwExSbeDofS6eTIs2Y/rs:fill:128:128/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTA1LTI3L3VzZXJfMjk0MjMxMV81OWNkMGVlNy03OWMyLTRkZTctOGEwYi00NDk1MTYyMGFiYTguanBlZw"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className={`mb-1 ${mobile ? 'text-base' : 'text-lg'} font-medium`}>
          Paweł Kuna
        </h3>
        <div className="mt-1">
          <span className="text-xs text-[#8c52ff] font-medium">
            Creador
          </span>
        </div>
      </div>

      <div className="flex flex-col py-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center ${mobile ? 'px-3 py-2 text-[14px]' : 'px-6 py-2.5 text-[15px]'} ${
              path === item.path ? 'text-white font-medium' : 'text-gray-400 font-medium'
            }`}
            onClick={mobile ? () => document.body.click() : undefined}
          >
            <span className="mr-3">
              {item.icon}
            </span>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
