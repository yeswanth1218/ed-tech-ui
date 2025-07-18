import React, { useState } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I understand your question. As an AI assistant for Skool, I can help you with navigation, features, and general questions about the platform. What specific information would you like to know?",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // AI Brain/Neural Network Logo
  const AILogo = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.8"/>
      <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.8"/>
      <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.8"/>
      <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.8"/>
      <path d="M9.5 10.5L6.5 7.5M14.5 10.5L17.5 7.5M9.5 13.5L6.5 16.5M14.5 13.5L17.5 16.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="12" cy="4" r="1" fill="currentColor" opacity="0.4"/>
      <circle cx="12" cy="20" r="1" fill="currentColor" opacity="0.4"/>
      <circle cx="4" cy="12" r="1" fill="currentColor" opacity="0.4"/>
      <circle cx="20" cy="12" r="1" fill="currentColor" opacity="0.4"/>
    </svg>
  );

  // Magic Sparkles for hover effect
  const MagicSparkles = () => (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-3 right-1 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-2 left-1 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1 right-3 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
      <div className="absolute top-1/4 right-0 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
    </div>
  );

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleChat}
          className="group relative bg-black hover:bg-gray-900 text-white w-16 h-16 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 flex items-center justify-center overflow-hidden"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <AILogo />
          )}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300">
            <MagicSparkles />
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[32rem] bg-white rounded-3xl shadow-2xl border border-black z-50 flex flex-col overflow-hidden backdrop-blur-sm">
          {/* Chat Header */}
          <div className="bg-black text-white p-6 flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center relative">
                <AILogo />
                <MagicSparkles />
              </div>
              <div>
                <h3 className="font-bold text-lg">Skool AI</h3>
                <p className="text-white/80 text-sm">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-white/80">Online</span>
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <MagicSparkles />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-3 max-w-xs`}>
                   {message.sender === 'bot' && (
                     <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                       <AILogo />
                       <div className="absolute inset-0 opacity-50">
                         <MagicSparkles />
                       </div>
                     </div>
                   )}
                   <div
                     className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                       message.sender === 'user'
                         ? 'bg-black text-white rounded-br-md'
                         : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm'
                     }`}
                   >
                     {message.text}
                   </div>
                   {message.sender === 'user' && (
                     <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                       <span className="text-white font-bold text-sm">U</span>
                     </div>
                   )}
                 </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="flex gap-3 items-end">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm bg-gray-50 transition-all duration-200"
                />
              </div>
              <button
                 onClick={sendMessage}
                 disabled={!inputMessage.trim()}
                 className="group relative bg-black hover:bg-gray-900 disabled:bg-gray-400 text-white w-12 h-12 rounded-2xl transition-all duration-200 flex items-center justify-center transform hover:scale-105 disabled:hover:scale-100 overflow-hidden"
               >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
                 <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0">
                   <MagicSparkles />
                 </div>
               </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;