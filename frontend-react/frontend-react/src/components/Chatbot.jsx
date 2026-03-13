
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Bot, User } from 'lucide-react';

const SYSTEM_PROMPT = `You are the official AI assistant for Noble Nexus, an education technology company that provides innovative digital learning and eLearning solutions. Your role is to help visitors understand the company, its services, and how Noble Nexus can support their education or training needs.

Always answer questions based only on the information about Noble Nexus and its services. Be clear, professional, and concise.

Company Overview:
Noble Nexus is an EdTech company focused on transforming education through digital learning solutions. The company builds technology and services that improve learning experiences for students, educators, institutions, businesses, and government organizations.
Its mission is to create innovative, accessible, and inclusive learning environments using modern technology and instructional design.
The company works with: Schools (K-12), Universities and colleges, Corporate organizations, Government institutions seeking workforce training solutions.

Core Services:
1. School Management ERP Systems — Platforms that streamline academic administration, communication, and school operations.
2. Instructional Design and Custom Course Development — Creation of engaging, interactive digital courses designed by learning experts.
3. Managed eLearning Services — End-to-end support for Learning Management Systems (LMS), including setup, maintenance, and support.
4. Digital Content Management Solutions — Systems to organize, store, and distribute digital learning resources efficiently.
5. Accessibility Compliance Services — Ensuring learning platforms and content are accessible to all learners, including those with disabilities.

Target Customers: Educational institutions, Universities, Training organizations, Corporations that want employee training programs, Governments looking to upskill their workforce.

Value Proposition: Innovation in digital education, Customized learning solutions, Scalable platforms for institutions, Improved engagement and learning outcomes.

Contact Information:
Email: contactus@noblenexus-ie.com
Website contact form available on the site.

Rules:
- Answer questions about Noble Nexus services, products, and mission.
- Provide explanations of solutions in simple terms.
- Guide users toward the right service based on their needs.
- If a question is unrelated to Noble Nexus or its offerings, respond: "I'm the Noble Nexus assistant and can only help with questions about Noble Nexus and its services. Feel free to ask me about our eLearning solutions, services, or how we can help your organization!"
- Never invent services or details not mentioned above.
- Keep responses concise (2-4 sentences when possible).`;

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'openrouter/free';
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const Chatbot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: '👋 Hello! I\'m the Noble Nexus AI Assistant. I can help you learn about our eLearning solutions, services, and how we can support your education or training needs. What would you like to know?' }
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

    const quickQuestions = [
        'What does Noble Nexus do?',
        'What services do you offer?',
        'How can I contact you?',
    ];

    const sendMessage = async (text) => {
        const trimmed = text.trim();
        if (!trimmed || isTyping) return;

        const userMsg = { id: Date.now(), type: 'user', text: trimmed };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        if (!API_KEY || API_KEY === 'YOUR_NEW_KEY' || API_KEY === 'your_api_key_here') {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: "OpenRouter API key not configured. Please add VITE_OPENROUTER_API_KEY to your .env file."
            }]);
            setIsTyping(false);
            return;
        }

        try {
            const apiMessages = [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages.filter(m => m.id !== 1).map(m => ({
                    role: m.type === 'user' ? 'user' : 'assistant',
                    content: m.text,
                })),
                { role: 'user', content: trimmed },
            ];

            const res = await fetch(OPENROUTER_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': window.location.origin,
                    'X-Title': 'Noble Nexus',
                },
                body: JSON.stringify({
                    model: MODEL,
                    messages: apiMessages,
                    max_tokens: 500,
                    temperature: 0.7,
                }),
            });

            const data = await res.json();

            if (res.ok && data?.choices?.[0]?.message?.content) {
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    type: 'bot',
                    text: data.choices[0].message.content
                }]);
            } else {
                console.error('OpenRouter error:', res.status, data);
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    type: 'bot',
                    text: data?.error?.message || "I'm sorry, I couldn't process that. Please try again."
                }]);
            }
        } catch (err) {
            console.error('Chatbot error:', err);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: "I'm sorry, something went wrong. Please try again later."
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        sendMessage(inputValue);
    };

    const showQuickQuestions = messages.length === 1;

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
                        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-[90vw] md:w-[400px] h-[600px] max-h-[85vh] bg-[#FFFFFF] border border-gray-200 rounded-3xl shadow-2xl z-[9999] flex flex-col overflow-hidden font-sans ring-1 ring-black/5"
                    >
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-50 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-50 rounded-full blur-[80px] pointer-events-none"></div>

                        {/* Header */}
                        <div className="relative bg-gray-50 backdrop-blur-md border-b border-gray-200 p-5 flex items-center justify-between shrink-0 z-10">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F766E] to-[#2563EB] p-[2px]">
                                        <div className="w-full h-full rounded-full bg-[#FFFFFF] flex items-center justify-center overflow-hidden">
                                            <Bot size={24} className="text-[#0F766E]" />
                                        </div>
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#111111] text-lg tracking-tight flex items-center gap-2">
                                        Noble Nexus AI <Sparkles size={14} className="text-amber-500" />
                                    </h3>
                                    <p className="text-xs text-[#0F766E] font-bold tracking-wider uppercase">AI Assistant</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 flex items-center justify-center bg-red-500/20 hover:bg-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-500/30 rounded-full text-red-500 hover:text-white transition-all duration-300 group cursor-pointer"
                                title="Close Chat"
                            >
                                <X size={18} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="relative flex-1 overflow-y-auto p-5 space-y-6 z-10 custom-scrollbar">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex w-full items-end gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.type === 'bot' && (
                                        <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                                            <Bot size={14} className="text-[#0F766E]" />
                                        </div>
                                    )}

                                    <div className={`max-w-[80%] p-4 text-sm font-medium leading-relaxed shadow-sm ${msg.type === 'user'
                                        ? 'bg-gradient-to-br from-[#0F766E] to-[#2563EB] text-white rounded-2xl rounded-tr-none border border-transparent'
                                        : 'bg-[#F8FAFC] text-[#111111] rounded-2xl rounded-tl-none border border-gray-200 hover:border-teal-300 transition-colors'
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

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex items-end gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                                        <Bot size={14} className="text-[#0F766E]" />
                                    </div>
                                    <div className="bg-[#F8FAFC] border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 bg-[#0F766E] rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-[#0F766E] rounded-full animate-bounce delay-100"></span>
                                        <span className="w-1.5 h-1.5 bg-[#0F766E] rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Questions */}
                        {showQuickQuestions && (
                            <div className="relative z-10 px-5 pb-2 flex flex-wrap gap-2">
                                {quickQuestions.map((q, i) => (
                                    <button
                                        key={i}
                                        className="text-xs px-3 py-1.5 rounded-full border border-[#0F766E]/30 text-[#0F766E] hover:bg-[#0F766E]/10 transition-colors cursor-pointer font-medium"
                                        onClick={() => sendMessage(q)}
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="relative bg-[#FFFFFF] border-t border-gray-200 p-5 shrink-0 z-10">
                            <form onSubmit={handleSend} className="relative flex items-center group">
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about Noble Nexus..."
                                    disabled={isTyping}
                                    className="relative w-full bg-[#F8FAFC] border border-gray-200 rounded-xl pl-5 pr-14 py-4 text-sm font-medium text-[#111111] focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-all placeholder:text-[#555555] disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="absolute right-2 p-2.5 bg-gradient-to-r from-[#0F766E] to-[#2563EB] text-white rounded-lg hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95 cursor-pointer"
                                >
                                    <Send size={16} />
                                </button>
                            </form>

                            <div className="flex justify-between items-center mt-4 px-1">
                                <p className="text-[10px] text-[#555555] font-bold tracking-widest uppercase flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Noble Nexus AI
                                </p>
                                <button
                                    onClick={onClose}
                                    className="text-[10px] text-gray-500 hover:text-red-400 font-medium transition-colors tracking-wide uppercase group flex items-center gap-1 cursor-pointer"
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

export default Chatbot;
