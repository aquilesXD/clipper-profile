import { useState } from "react";
import { ChevronDown, Image, ArrowLeft } from "lucide-react";

interface MessageAutomationFormProps {
  title: string;
  description: string;
  onSave: () => void;
  onCancel: () => void;
}

export function MessageAutomationForm({ title, description, onSave, onCancel }: MessageAutomationFormProps) {
  const [messageContent, setMessageContent] = useState(
    "hey {recipient_name}! We're stoked to have you as part of our whop!\n\nIf at any point you have any questions about our whop or literally anything feel free to DM me here and I'll be happy to help!! Excited to see you inside the whop :)"
  );
  const [sendEmail, setSendEmail] = useState(false);

  return (
    <div className="bg-[#0c0c0c] rounded-lg border border-[#1c1c1c] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#1c1c1c]">
        <div className="flex items-center space-x-3">
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-white mr-2"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-xl font-medium text-white">{title}</h2>
          <div className="relative inline-block w-10 align-middle select-none">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="sr-only"
              checked={true}
              readOnly
            />
            <div className="block bg-blue-600 w-10 h-6 rounded-full"></div>
            <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="p-3 border-b border-[#1c1c1c] text-gray-400 text-sm">
        {description}
      </div>

      {/* Message input */}
      <div className="p-4">
        <textarea
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          className="w-full bg-[#121212] border border-[#2a2a2a] rounded-md p-4 text-white resize-none min-h-[160px]"
        ></textarea>

        {/* Variable buttons */}
        <div className="flex mt-2 space-x-2">
          <button className="text-[#33BFFF] border border-[#33BFFF] bg-[#121212] rounded px-3 py-1 text-sm">
            {"{recipient_name}"}
          </button>
          <button className="text-[#33BFFF] border border-[#33BFFF] bg-[#121212] rounded px-3 py-1 text-sm">
            {"{whop_name}"}
          </button>
        </div>

        {/* Add images button */}
        <button className="flex items-center justify-center w-full mt-4 border border-[#2a2a2a] bg-[#121212] rounded-md p-3 text-white">
          <Image size={18} className="mr-2" />
          Añadir imágenes o videos
        </button>

        {/* Email checkbox */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="send-email"
            checked={sendEmail}
            onChange={() => setSendEmail(!sendEmail)}
            className="h-4 w-4 border border-[#2a2a2a] rounded bg-[#121212]"
          />
          <label htmlFor="send-email" className="ml-2 text-white">
            Enviar correo electrónico al usuario cuando se activa
          </label>
        </div>

        {/* Send as section */}
        <div className="mt-4">
          <p className="text-gray-400 mb-2">Enviar mensaje como</p>
          <div className="relative">
            <button className="flex items-center justify-between w-full border border-[#2a2a2a] bg-[#121212] rounded-md p-3 text-white">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white mr-2">
                  AG
                </div>
                <span>aquiles gonzalez</span>
              </div>
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        {/* Save button */}
        <button
          onClick={onSave}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md p-3"
        >
          Guardar
        </button>
      </div>
    </div>
  );
}
