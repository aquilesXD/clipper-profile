import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../components/ui/Form.css';

const VerifyCode: React.FC = () => {
  const [code, setCode] = useState<string[]>(Array(5).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  // Obtener email del localStorage al montar el componente
  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (!savedEmail) {
      navigate('/signin');
      return;
    }
    setEmail(savedEmail);
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, ''); // Solo números
    const newCode = [...code];
    
    if (value.length > 1) { // Pegado de código
      const pastedCode = value.split('').slice(0, 5);
      pastedCode.forEach((char, i) => {
        if (i < 5) newCode[i] = char;
      });
    } else {
      newCode[index] = value;
    }

    setCode(newCode);

    // Autofocus y auto-enviar cuando está completo
    if (newCode.every(c => c !== '') && newCode.join('').length === 5) {
      handleSubmit(newCode.join(''));
    } else if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (fullCode: string) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://contabl.net/nova/verify-code?email=${encodeURIComponent(email)}&code=${fullCode}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${await response.text()}`);
      }

      const data = await response.json();

      if (data.verified) {
        localStorage.setItem('authToken', data.token);
        navigate('/dashboard');
      } else {
        throw new Error('Código inválido o expirado');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error de verificación');
      setCode(Array(5).fill(""));
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await fetch(
        `https://contabl.net/nova/resend-code?email=${encodeURIComponent(email)}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error('Error al reenviar el código');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error de conexión');
    }
  };

  const maskedEmail = email?.replace(/(\w{3})[\w.-]+@(\w+)/, '$1***@$2');

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#121212] rounded-lg p-6">
        <div className="flex justify-center mb-4">
          <img
            alt="Clipper Logo"
            src="https://whop.com/oauth/_next/image/?url=%2Foauth%2Fwhop-logo-square.png&w=48&q=75"
            className="w-12 h-12 rounded-lg"
          />
        </div>

        <h2 className="text-white text-center text-2xl font-bold mb-2">Bienvenido de nuevo!</h2>

        <p className="text-[#999] text-center mb-6 text-sm">
          Ingrese el código que recibió en su correo electrónico
          <br />
          <strong className="text-white block mt-1">{maskedEmail}</strong>
        </p>

        <div className="flex justify-center space-x-2 mb-6">
          {[0, 1, 2, 3, 4].map((index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-10 h-10 text-center text-lg bg-[#0c0c0c] border border-[#333] text-white rounded-md focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
              maxLength={1}
              value={code[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => e.key === 'Backspace' && !code[index] && index > 0 && inputRefs.current[index - 1]?.focus()}
              inputMode="numeric"
              autoComplete="one-time-code"
              disabled={loading}
            />
          ))}
        </div>

        {error && (
          <div className="text-red-500 text-center mb-4 text-sm">
            {error}
          </div>
        )}

        <button 
          className="flex items-center justify-center w-full text-white text-sm mb-4 hover:text-[#7c3aed]"
          onClick={() => navigate(-1)}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Volver
        </button>

        <div className="text-center">
          <button
            className="text-white hover:underline text-sm disabled:opacity-50"
            onClick={handleResendCode}
            disabled={loading}
            type="button"
          >
            No recibí un código
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;