import React, { useState, useRef, useEffect } from 'react';
import { Smile, Send, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [currentTime, setCurrentTime] = useState('16:51');
  const inputRef = useRef(null);

  useEffect(() => {
    // Format realistic local time (HH:mm)
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleSendMessage = (e) => {
    e?.preventDefault();
    const textToSend = message.trim() || 'How can I help you? :)';
    const phoneNumber = '918106752927';
    const encodedText = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end pointer-events-auto select-none font-sans">
      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div
          id="whatsapp-chat-popup"
          role="dialog"
          aria-label="WhatsApp Support Chat"
          className="mb-3.5 w-[315px] sm:w-[340px] max-w-[calc(100vw-32px)] bg-white rounded-2xl overflow-hidden border border-[#DCE8ED] animate-in fade-in slide-in-from-bottom-3 duration-250 flex flex-col transition-all"
          style={{
            boxShadow: '0 16px 40px -8px rgba(13, 50, 64, 0.22), 0 4px 16px -2px rgba(13, 50, 64, 0.08)',
          }}
        >
          {/* Refined Syfinor-style Teal/Green Header */}
          <div className="bg-gradient-to-r from-[#0C4654] via-[#0D5B66] to-[#009E88] px-4 py-3.5 flex items-center justify-between text-white border-b border-[#0A3D49]/30">
            <div className="flex items-center gap-3">
              {/* WhatsApp Icon with clean white glow */}
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-xs border border-white/20">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-[14.5px] leading-tight text-white tracking-tight">
                  Let's chat on WhatsApp
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
                  <span className="text-[11.5px] text-[#A6D4DE] font-normal">
                    Online • Syfinor Support
                  </span>
                </div>
              </div>
            </div>

            {/* Close button — X icon */}
            <button
              id="whatsapp-header-close-btn"
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/15 rounded-lg transition-colors cursor-pointer text-white/80 hover:text-white"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>

          {/* Clean Light Message Area with subtle delicate background */}
          <div
            className="p-4 sm:p-4.5 min-h-[195px] flex flex-col justify-between"
            style={{
              backgroundColor: '#F7FAFB',
              backgroundImage: `radial-gradient(#CBDCE3 0.65px, transparent 0.65px), radial-gradient(#CBDCE3 0.65px, #F7FAFB 0.65px)`,
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px',
            }}
          >
            {/* Clean Rounded Message Bubble */}
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[86%] shadow-sm border border-[#E1ECF0] self-start">
              <p className="text-[#0D3240] text-[13.5px] sm:text-[14px] leading-snug font-normal">
                How can I help you? :)
              </p>
              <div className="flex items-center justify-end gap-1 mt-1.5">
                <span className="text-[10.5px] text-slate-400 font-sans tracking-tight">
                  {currentTime}
                </span>
              </div>
            </div>

            {/* Modern Rounded Input Row */}
            <form onSubmit={handleSendMessage} className="flex items-center gap-2 mt-4">
              <div className="flex-1 bg-white rounded-full px-3.5 py-2 sm:py-2.5 flex items-center gap-2 shadow-sm border border-[#D5E4EC] focus-within:border-[#00B89F] focus-within:ring-2 focus-within:ring-[#00B89F]/20 transition-all">
                <Smile className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Write your message..."
                  className="w-full text-[13px] text-[#0D3240] placeholder-slate-400 outline-none bg-transparent"
                />
              </div>

              {/* Clean Circular Send Button with Teal/Green Brand Style */}
              <button
                type="submit"
                id="whatsapp-send-btn"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#00B89F] hover:bg-[#00a38c] text-white flex items-center justify-center flex-shrink-0 transition-all duration-150 cursor-pointer shadow-sm hover:shadow active:scale-95"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4 ml-0.5 fill-white text-transparent" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button - Consistent WhatsApp Green */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        className="w-14 h-14 sm:w-[58px] sm:h-[58px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] hover:scale-105 active:scale-95"
        style={{
          boxShadow: '0 8px 24px -2px rgba(37, 211, 102, 0.45), 0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </div>
  );
}
