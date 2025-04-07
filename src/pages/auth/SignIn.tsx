import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../components/ui/Form.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Verificar conexión a internet
      if (!navigator.onLine) {
        throw new Error('No hay conexión a internet');
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      // Hacer la solicitud GET
      const response = await fetch(
        `https://contabl.net/nova/get-videos-to-pay?email=${encodeURIComponent(email)}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          signal: controller.signal
        }
      );

      clearTimeout(timeoutId);

      // Manejar errores HTTP
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText || 'Error desconocido'}`);
      }

      // Procesar respuesta
      const data = await response.json();
      
      // Validar estructura de datos
      if (!data.data || !Array.isArray(data.data)) {
        throw new Error('Respuesta inválida del servidor');
      }

      // Buscar el email en los resultados
      const userData = data.data.find((item: any) => item.email === email);
      if (!userData) {
        throw new Error('El correo no está registrado');
      }

      // Guardar datos relevantes
      localStorage.setItem('userData', JSON.stringify({
        email: userData.email,
        whatsapp: userData.whatsapp_phone,
        name: userData.first_name
      }));

      navigate('/profile-saldo');

    } catch (err) {
      let errorMessage = 'Error al iniciar sesión';
      
      if (err instanceof TypeError) {
        errorMessage = 'Error de conexión - Verifica tu red';
      } else if (err instanceof Error && err.name === 'AbortError') {
        errorMessage = 'Tiempo de espera agotado';
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      console.error('Error en login:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="login-container w-full max-w-md bg-[#121212] rounded-lg p-6">
        <div className="flex justify-center mb-4">
          <img
            alt="Clipper Logo"
            src="https://whop.com/oauth/_next/image/?url=%2Foauth%2Fwhop-logo-square.png&w=48&q=75"
            className="w-12 h-12 rounded-lg"
          />
        </div>

        <h2 className="text-white text-center text-2xl font-bold mb-6">Iniciar sesión Clipper</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full p-3 bg-[#0c0c0c] border border-[#333] text-white rounded-md text-sm"
              id="email"
              placeholder="Tu correo"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-sm mb-3 text-center">
              {error}
            </div>
          )}

          <button
            className="w-full p-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-md text-sm transition-colors disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Verificando...' : 'Continuar'}
          </button>
        </form>

        <div className="mt-6">
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-[#333]"></div>
            <span className="px-3 text-[#999] text-xs">O inicia sesión con</span>
            <div className="flex-1 border-t border-[#333]"></div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              className="p-2 border border-[#333] rounded-md hover:bg-[#1c1c1c] transition-colors"
              aria-label="Iniciar sesión con Discord"
              type="button"
            >
              <svg
                className="text-[#5865f2]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.2837 5.44224C17.93 4.8158 16.4739 4.34976 14.9451 4.08595C14.9268 4.0832 14.9085 4.09144 14.8993 4.10789C14.7241 4.43019 14.5324 4.84878 14.3991 5.18281C12.7602 4.93724 11.1305 4.93724 9.53238 5.18281C9.399 4.84054 9.19896 4.43019 9.02287 4.10789C9.0137 4.09144 8.99539 4.0832 8.97707 4.08595C7.44913 4.34976 5.99304 4.8158 4.63845 5.44224C4.63022 5.445 4.62288 5.4505 4.61646 5.45876C1.54376 10.0136 0.741706 14.4649 1.14171 18.8614C1.14354 18.8779 1.15271 18.8934 1.16554 18.9035C2.99026 20.2329 4.74614 21.0316 6.47105 21.5737C6.48936 21.5792 6.50859 21.5737 6.52142 21.5599C6.96804 20.9356 7.36557 20.2769 7.70236 19.5839C7.71703 19.5536 7.70236 19.5179 7.6694 19.5042C7.08986 19.2834 6.5378 19.0187 6.01029 18.7209C5.97275 18.6991 5.97002 18.6442 6.00481 18.6197C6.11464 18.5374 6.22449 18.4513 6.32978 18.3651C6.34445 18.3528 6.36459 18.3501 6.38199 18.3583C9.83197 19.9302 13.5675 19.9302 16.9808 18.3583C16.9982 18.3501 17.0183 18.3528 17.0339 18.3651C17.1392 18.4513 17.249 18.5374 17.3589 18.6197C17.3937 18.6442 17.3918 18.6991 17.3543 18.7209C16.8267 19.0242 16.2747 19.2834 15.6943 19.5033C15.6613 19.517 15.6475 19.5536 15.6622 19.5839C16.0044 20.2769 16.4019 20.9356 16.8422 21.5599C16.8541 21.5737 16.8742 21.5792 16.8926 21.5737C18.6266 21.0316 20.3825 20.2329 22.2072 18.9035C22.2209 18.8934 22.2292 18.8779 22.231 18.8614C22.7071 13.7459 21.4487 9.33282 19.3162 5.45876C19.3107 5.4505 19.3033 5.445 19.2837 5.44224ZM8.28863 16.0908C7.22808 16.0908 6.35978 15.1237 6.35978 13.9395C6.35978 12.7553 7.2098 11.7882 8.28863 11.7882C9.3765 11.7882 10.2357 12.7636 10.2174 13.9395C10.2174 15.1237 9.36743 16.0908 8.28863 16.0908ZM15.7473 16.0908C14.6867 16.0908 13.8184 15.1237 13.8184 13.9395C13.8184 12.7553 14.6685 11.7882 15.7473 11.7882C16.8351 11.7882 17.6944 12.7636 17.6761 13.9395C17.6761 15.1237 16.8351 16.0908 15.7473 16.0908Z" />
              </svg>
            </button>
            <button
              className="p-2 border border-[#333] rounded-md hover:bg-[#1c1c1c] transition-colors"
              aria-label="Iniciar sesión con Google"
              type="button"
            >
              <svg
                className="text-[#db4437]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" />
                <path
                  d="M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12.0005 6C13.5299 6 14.9214 6.577 15.981 7.5195L18.8095 4.691C17.0235 3.0265 14.6345 2 12.0005 2C8.1595 2 4.82799 4.1685 3.15302 7.3455Z"
                  fill="#EA4335"
                />
                <path
                  d="M12.0004 22C14.5894 22 16.9304 21.0115 18.7044 19.404L15.6144 16.785C14.5719 17.5742 13.3039 18.001 12.0004 18C9.39895 18 7.19045 16.3415 6.35845 14.027L3.09845 16.5395C4.75245 19.778 8.11344 22 12.0004 22Z"
                  fill="#34A853"
                />
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.6145 16.7855L15.6145 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#4A90E2"
                />
                <path
                  d="M6.35842 14.0269C6.19842 13.4569 6.11342 12.8569 6.11342 12.2469C6.11342 11.6369 6.20442 11.0369 6.35842 10.4669L6.35442 10.4269L3.12342 7.95691L3.09442 7.97391C2.40242 9.17691 2.00342 10.5669 2.00342 12.0469C2.00342 13.5269 2.40242 14.9169 3.09442 16.1199L6.35842 14.0269Z"
                  fill="#FBBC05"
                />
              </svg>
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-[#999]">
            Al registrarte, aceptas nuestros
            <Link className="font-medium underline mx-1 text-[#999]" to="">
              Términos
            </Link>
            &
            <Link className="font-medium underline mx-1 text-[#999]" to="">
              Privacidad
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <hr className="border-t border-[#333] my-4" />
          <div className="flex justify-center">
            <p className="text-white text-sm">
              ¿Nuevo en Clipper?
              <Link className="text-[#7c3aed] ml-1 hover:underline" to="/signup">
                Crear una cuenta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn