import { useState } from "react";
import { DashboardLayout } from "./DashBoardLayout";
import { UserPlus, UserMinus, MessageSquare, Search } from "lucide-react";
import { MessageAutomationForm } from "./MessageAutomationForm";

export function MessagesAutomationContent() {
  const [showUserJoinedForm, setShowUserJoinedForm] = useState(false);
  const [showUserLeftForm, setShowUserLeftForm] = useState(false);
  const [showNewLeadForm, setShowNewLeadForm] = useState(false);

  const handleSaveForm = () => {
    // Here would be the logic to save the form data
    setShowUserJoinedForm(false);
    setShowUserLeftForm(false);
    setShowNewLeadForm(false);
  };

  return (
    <DashboardLayout>
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Usuario se unió */}
            <div className="border border-[#1c1c1c] bg-[#0c0c0c] rounded-lg overflow-hidden">
              {showUserJoinedForm ? (
                <MessageAutomationForm
                  title="User joined"
                  description="Send a message when a user joins this whop"
                  onSave={handleSaveForm}
                  onCancel={() => setShowUserJoinedForm(false)}
                />
              ) : (
                <div className="p-6 flex flex-col items-center">
                  <div className="flex justify-center items-center space-x-6 mb-6">
                    <div className="w-16 h-16 border border-[#2a2a2a] bg-[#181818] rounded-lg flex items-center justify-center">
                      <UserPlus className="text-white" size={24} />
                    </div>
                    <div className="border-t border-dashed border-blue-600 w-10"></div>
                    <div className="w-16 h-16 border border-[#2a2a2a] bg-[#181818] rounded-lg flex items-center justify-center">
                      <MessageSquare className="text-white" size={24} />
                    </div>
                  </div>
                  <h2 className="text-xl font-medium text-white mb-3">User joined</h2>
                  <p className="text-gray-400 text-center mb-6">
                    Send a message when a user joins this whop
                  </p>
                  <button
                    onClick={() => setShowUserJoinedForm(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-md"
                  >
                    Activar la automatización
                  </button>
                </div>
              )}
            </div>

            {/* Usuario se fue */}
            <div className="border border-[#1c1c1c] bg-[#0c0c0c] rounded-lg overflow-hidden">
              {showUserLeftForm ? (
                <MessageAutomationForm
                  title="User left"
                  description="Send a message when a user leaves this whop or cancels their membership"
                  onSave={handleSaveForm}
                  onCancel={() => setShowUserLeftForm(false)}
                />
              ) : (
                <div className="p-6 flex flex-col items-center">
                  <div className="flex justify-center items-center space-x-6 mb-6">
                    <div className="w-16 h-16 border border-[#2a2a2a] bg-[#181818] rounded-lg flex items-center justify-center">
                      <UserMinus className="text-white" size={24} />
                    </div>
                    <div className="border-t border-dashed border-blue-600 w-10"></div>
                    <div className="w-16 h-16 border border-[#2a2a2a] bg-[#181818] rounded-lg flex items-center justify-center">
                      <MessageSquare className="text-white" size={24} />
                    </div>
                  </div>
                  <h2 className="text-xl font-medium text-white mb-3">User left</h2>
                  <p className="text-gray-400 text-center mb-6">
                    Send a message when a user leaves this whop or cancels their membership
                  </p>
                  <button
                    onClick={() => setShowUserLeftForm(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-md"
                  >
                    Activar la automatización
                  </button>
                </div>
              )}
            </div>

            {/* New Lead */}
            <div className="border border-[#1c1c1c] bg-[#0c0c0c] rounded-lg overflow-hidden lg:col-span-1">
              {showNewLeadForm ? (
                <MessageAutomationForm
                  title="New Lead"
                  description="Send a message when an interested user visits your store page but doesn't check out."
                  onSave={handleSaveForm}
                  onCancel={() => setShowNewLeadForm(false)}
                />
              ) : (
                <div className="p-6 flex flex-col items-center">
                  <div className="flex justify-center items-center space-x-6 mb-6">
                    <div className="w-16 h-16 border border-[#2a2a2a] bg-[#181818] rounded-lg flex items-center justify-center">
                      <Search className="text-white" size={24} />
                    </div>
                    <div className="border-t border-dashed border-blue-600 w-10"></div>
                    <div className="w-16 h-16 border border-[#2a2a2a] bg-[#181818] rounded-lg flex items-center justify-center">
                      <MessageSquare className="text-white" size={24} />
                    </div>
                  </div>
                  <h2 className="text-xl font-medium text-white mb-3">New Lead</h2>
                  <p className="text-gray-400 text-center mb-6">
                    Send a message when an interested user visits your store page but doesn't check out.
                  </p>
                  <button
                    onClick={() => setShowNewLeadForm(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-md"
                  >
                    Activar la automatización
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
