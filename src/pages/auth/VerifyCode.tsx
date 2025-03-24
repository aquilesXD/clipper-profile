import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../components/ui/Form.css';

const VerifyCode: React.FC = () => {
  // Cambiar de 6 a 5 dígitos
  const [code, setCode] = useState<string[]>(Array(5).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize the array of refs for 5 digits
  if (inputRefs.current.length !== 5) {
    inputRefs.current = Array(5).fill(null);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    // Update the code state
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to next input if current input is filled
    if (value && index < 4) { // Cambiado de 5 a 4 para el último índice
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move focus to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center p-4">
      <div className="verification-container card w-full" style={{ maxWidth: '400px', borderRadius: '8px', backgroundColor: '#191919' }}>
        <div className="logo mt-4 text-center">
          <img
            alt="Clipper Logo"
            src="https://whop.com/oauth/_next/image/?url=%2Foauth%2Fwhop-logo-square.png&w=48&q=75"
            className="mx-auto"
            style={{ borderRadius: '8px' }}
          />
        </div>

        <h2 className="text-white text-center mt-4 text-xl sm:text-2xl font-bold">
          Bienvenido de nuevo!
        </h2>

        <p className="text-[#aaa] text-center mb-6 text-sm sm:text-base mt-2">
          Ingrese el código que recibió en su correo electrónico
          <br />
          <strong className="text-white block mt-1">
            mac*****emes@gmail.com
          </strong>
        </p>

        <div className="code-input flex justify-center mb-6">
          {/* 5 campos de entrada para código */}
          {[0, 1, 2, 3, 4].map((index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-10 h-10 sm:w-12 sm:h-12 mx-1 text-center text-lg sm:text-xl bg-[#0c0c0c] border border-[#333] text-white"
              maxLength={1}
              value={code[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{ borderRadius: '8px' }}
              inputMode="numeric"
              autoComplete="one-time-code"
            />
          ))}
        </div>

        <button className="btn-back text-white bg-transparent border-0 cursor-pointer flex items-center justify-center w-full mb-2 text-sm sm:text-base">
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
          <Link className="text-white hover:underline text-sm sm:text-base" to="/signin">
          Back
          </Link>
        </button>

        <div className="no-code text-center mt-2">
          <Link className="text-white hover:underline text-sm sm:text-base" to="/signin">
            No recibí un código
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
