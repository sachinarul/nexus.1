
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Bot, User } from 'lucide-react';

const HelpBot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Hello! I am Nexus AI. How can I assist you in transforming your education journey today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            const responses = [
                "That's an excellent question. Noble Nexus specializes in scalable digital infrastructure for modern institutions.",
                "I can certainly guide you. Our premium LMS solutions are designed for seamless integration.",
                "Our team is available 24/7. Would you like to schedule a priority consultation?",
                "You can access our exclusive resources directly from the dashboard once you sign up.",
                "To get started with our enterprise tier, please visit the Solutions page."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            const botMsg = { id: Date.now() + 1, type: 'bot', text: randomResponse };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                    />

                    {/* Chat Window */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-[90vw] md:w-[400px] h-[600px] max-h-[85vh] bg-navy-900 border border-white/10 rounded-3xl shadow-2xl z-[9999] flex flex-col overflow-hidden font-sans ring-1 ring-white/10"
                    >
                        {/* Premium Background Effects */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal/10 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                        {/* Header */}
                        <div className="relative bg-white/5 backdrop-blur-md border-b border-white/10 p-5 flex items-center justify-between shrink-0 z-10">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-blue-600 p-[2px]">
                                        <div className="w-full h-full rounded-full bg-navy-900 flex items-center justify-center overflow-hidden">
                                            <Bot size={24} className="text-teal" />
                                        </div>
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-navy-900 rounded-full animate-pulse"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg tracking-tight flex items-center gap-2">
                                        Nexus AI <Sparkles size={14} className="text-amber-400" />
                                    </h3>
                                    <p className="text-xs text-teal/80 font-medium tracking-wider uppercase">Premium Support</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 flex items-center justify-center bg-red-500/20 hover:bg-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-500/30 rounded-full text-red-500 hover:text-white transition-all duration-300 group"
                                title="Close Chat"
                            >
                                <X size={18} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="relative flex-1 overflow-y-auto p-5 space-y-6 z-10 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex w-full items-end gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.type === 'bot' && (
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <Bot size={14} className="text-teal" />
                                        </div>
                                    )}

                                    <div className={`max-w-[80%] p-4 text-sm leading-relaxed shadow-lg backdrop-blur-sm ${msg.type === 'user'
                                            ? 'bg-gradient-to-br from-teal to-blue-600 text-white rounded-2xl rounded-tr-none border border-white/10'
                                            : 'bg-white/5 text-gray-200 rounded-2xl rounded-tl-none border border-white/10 hover:border-white/20 transition-colors'
                                        }`}>
                                        {msg.text}
                                    </div>

                                    {msg.type === 'user' && (
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                                            <User size={14} className="text-purple-400" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex items-end gap-2">
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <Bot size={14} className="text-teal" />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-teal rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-teal rounded-full animate-bounce delay-100"></span>
                                        <span className="w-1.5 h-1.5 bg-teal rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="relative bg-white/5 backdrop-blur-md border-t border-white/10 p-5 shrink-0 z-10">
                            <form onSubmit={handleSend} className="relative flex items-center group">
                                <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-purple/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="relative w-full bg-black/40 border border-white/10 rounded-xl pl-5 pr-14 py-4 text-sm text-white focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/50 transition-all placeholder:text-gray-500"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 p-2.5 bg-gradient-to-r from-teal to-blue-600 text-white rounded-lg hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] disabled:opacity-30 disabled:cursor-not-allowed transition-all transform active:scale-95"
                                >
                                    <Send size={16} />
                                </button>
                            </form>

                            <div className="flex justify-between items-center mt-4 px-1">
                                <p className="text-[10px] text-gray-500 font-medium tracking-widest uppercase flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Noble Nexus Intelligence
                                </p>
                                <button
                                    onClick={onClose}
                                    className="text-[10px] text-gray-500 hover:text-red-400 font-medium transition-colors tracking-wide uppercase group flex items-center gap-1"
                                >
                                    End Session
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default HelpBot;
