
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Building2, UserCircle, Briefcase, BarChart, LayoutDashboard, HelpCircle, LogOut, Network, MessageCircle } from 'lucide-react';
import HelpBot from './HelpBot';
import Chatbot from './Chatbot';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { currentUser, logout } = useAuth();


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out border-b backdrop-blur-[10px]
            ${scrolled
                    ? 'bg-white/90 border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                    : 'bg-white/85 border-gray-100 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Brand Logo - Premium Effect */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-4 group relative">
                        <img src="/logo.png" alt="Noble Nexus" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-500 bg-transparent" />
                        <span className="text-xl font-extrabold font-sans tracking-tight text-[#0F172A] transition-all duration-300">
                            Noble Nexus
                        </span>
                    </Link>

                    {/* Desktop Menu - Glass Interactions */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Products Link */}
                        <div className="relative group/dropdown">
                            <button className="flex items-center gap-1 text-[#0F172A] font-bold hover:text-[#2563EB] transition-colors text-sm tracking-wide py-2">
                                Products <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300 opacity-90" />
                            </button>

                            {/* Dropdown Card */}
                            <div className="absolute top-full left-0 mt-4 w-[380px] bg-white border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-4 group-hover/dropdown:translate-y-0 overflow-hidden ring-1 ring-black/5 z-50">
                                {/* Decor Gradients */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-[40px] pointer-events-none"></div>

                                <div className="p-2 relative z-10">
                                    <div className="px-3 py-2 text-xs font-bold text-[#444444] uppercase tracking-widest border-b border-gray-100 mb-2">
                                        Core Platforms
                                    </div>
                                    {/* ClassBridge Product - Primary */}
                                    <Link to="/products/classbridge" className="flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-50/50 border border-indigo-100/50 hover:border-indigo-200 transition-all duration-300 group/item bg-indigo-50/20">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110 shadow-sm border border-indigo-100">
                                            <Network size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-[#111111] text-sm font-bold group-hover/item:text-indigo-600 transition-colors">ClassBridge</h4>
                                            <p className="text-xs text-[#444444] font-medium">EdTech AI Portal</p>
                                        </div>
                                    </Link>

                                    {/* LMS Product */}
                                    <Link to="/products/lms" className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-teal-100 transition-all duration-300 group/item mt-1">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#0F766E] group-hover/item:bg-[#0F766E] group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110 shadow-sm border border-teal-100">
                                            <LayoutDashboard size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#111111] text-sm font-bold group-hover/item:text-[#0F766E] transition-colors mb-0.5">LMS Platform</h4>
                                            <p className="text-xs text-[#444444] font-medium">Core education platform</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Services Mega Menu */}
                        <div className="relative group/dropdown">
                            <button className="flex items-center gap-1 text-[#0F172A] font-bold hover:text-[#2563EB] transition-colors text-sm tracking-wide py-2">
                                Services <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300 opacity-90" />
                            </button>

                            {/* Dropdown Card */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-white border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-4 group-hover/dropdown:translate-y-0 overflow-hidden ring-1 ring-black/5 z-50">
                                {/* Decor Gradients */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-[80px] pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-[80px] pointer-events-none"></div>

                                <div className="p-6 grid grid-cols-3 gap-6 relative z-10">
                                    {/* Card 1: K-12 */}
                                    <Link to="/services/k12" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 group/card shadow-sm hover:shadow-md">
                                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-teal-50 flex items-center justify-center text-[#0F766E] group-hover/card:bg-[#0F766E] group-hover/card:text-white transition-all duration-300 group-hover/card:scale-110 border border-teal-100">
                                            <BookOpen size={20} />
                                        </div>
                                        <h4 className="text-[#111111] text-sm font-bold group-hover/card:text-[#0F766E] transition-colors">K-12 Education</h4>
                                    </Link>

                                    {/* Card 2: Higher Ed */}
                                    <Link to="/services/higher-education" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 group/card shadow-sm hover:shadow-md">
                                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover/card:bg-[#2563EB] group-hover/card:text-white transition-all duration-300 group-hover/card:scale-110 border border-blue-200">
                                            <GraduationCap size={20} />
                                        </div>
                                        <h4 className="text-[#111111] text-sm font-bold group-hover/card:text-[#2563EB] transition-colors">Higher Education</h4>
                                    </Link>

                                    {/* Card 3: Corporate */}
                                    <Link to="/services/corporate-learning" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 group/card shadow-sm hover:shadow-md">
                                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 group-hover/card:bg-purple-600 group-hover/card:text-white transition-all duration-300 group-hover/card:scale-110 border border-purple-200">
                                            <Briefcase size={20} />
                                        </div>
                                        <h4 className="text-[#111111] text-sm font-bold group-hover/card:text-purple-600 transition-colors">Corporate Learning</h4>
                                    </Link>
                                </div>

                                {/* Dropdown Footer */}
                                <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                                    <Link to="/services" className="text-xs font-bold text-[#444444] hover:text-[#0F766E] flex items-center justify-center gap-1 transition-colors uppercase tracking-wider">
                                        View All Solutions <span className="text-[#0F766E] group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Elevate Coaching Link */}
                        <Link to="/elevate-coaching" className="relative text-[#0F172A] hover:text-[#2563EB] transition-colors text-sm font-bold tracking-wide group py-2">
                            Elevate Coaching
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] transition-all duration-300 group-hover:w-full opacity-80"></span>
                        </Link>

                        <Link to="/why-noble-nexus" className="relative text-[#0F172A] hover:text-[#2563EB] transition-colors text-sm font-bold tracking-wide group py-2">
                            Why Noble Nexus
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] transition-all duration-300 group-hover:w-full opacity-80"></span>
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">

                        <button
                            onClick={() => setIsChatOpen(true)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-50 border border-teal-100 hover:bg-teal-100 text-[#0F766E] transition-all shadow-sm group"
                            title="AI Assistant"
                        >
                            <HelpCircle size={20} className="group-hover:scale-110 transition-transform" />
                        </button>


                        {currentUser ? (
                            <div className="flex items-center gap-4 pl-4 border-l border-gray-100">
                                <Link to="/dashboard" className="flex items-center gap-3 group">
                                    <div className="text-right hidden xl:block">
                                        <p className="text-sm font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors">{currentUser.displayName || 'User'}</p>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Dashboard</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-[2px]">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#2563EB] font-bold text-sm">
                                            {currentUser.displayName ? currentUser.displayName.charAt(0) : <UserCircle size={20} />}
                                        </div>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => logout()}
                                    className="p-2 ml-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                                    title="Sign Out"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="px-6 py-2 bg-transparent text-[#0F172A] border-[#CBD5F5] border rounded-full text-sm font-bold transition-all hover:bg-gray-50/50">
                                    Log in
                                </Link>
                                <Link to="/contact" className="px-6 py-2.5 bg-[#0D9488] hover:bg-[#0B7A70] text-white font-bold rounded-full shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-95 text-sm">
                                    Contact Us
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex-shrink-0">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-[#111111] hover:text-[#0F766E] p-2 focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-[100] bg-white animate-fade-in-down flex flex-col min-h-screen">
                    {/* Diagonal line pattern background */}
                    <div 
                        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
                        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 6px)' }}
                    ></div>

                    {/* Header inside overlay */}
                    <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4">
                        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                            <span className="text-3xl font-sans tracking-tight text-[#0F766E]" style={{ fontFamily: 'inherit' }}>
                                Noble Nexus
                            </span>
                        </Link>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-700 text-[#111111] hover:bg-blue-50 transition-colors"
                        >
                            <X size={24} strokeWidth={2} />
                        </button>
                    </div>

                    {/* Links Container */}
                    <div className="relative z-10 px-6 pt-4 flex-1 overflow-y-auto pb-20">
                        {/* Primary Bold Links */}
                        <div className="flex flex-col space-y-4 mb-8">
                            <Link to="/products" onClick={() => setIsOpen(false)} className="text-[25px] font-black leading-tight text-[#333333] hover:text-blue-700 font-sans tracking-tight">Products</Link>
                            <Link to="/services" onClick={() => setIsOpen(false)} className="text-[25px] font-black leading-tight text-[#333333] hover:text-blue-700 font-sans tracking-tight">Services</Link>
                            <Link to="/elevate-coaching" onClick={() => setIsOpen(false)} className="text-[25px] font-black leading-tight text-[#333333] hover:text-blue-700 font-sans tracking-tight">Elevate Coaching</Link>
                            <Link to="/why-noble-nexus" onClick={() => setIsOpen(false)} className="text-[25px] font-black leading-tight text-[#333333] hover:text-blue-700 font-sans tracking-tight">Why Noble Nexus</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="text-[25px] font-black leading-tight text-[#333333] hover:text-blue-700 font-sans tracking-tight">About Us</Link>
                        </div>

                        {/* Secondary Medium Links */}
                        <div className="flex flex-col space-y-3 mb-10">
                            <Link to="/investors" onClick={() => setIsOpen(false)} className="text-[17px] font-normal text-[#555555] hover:text-blue-700">Investors</Link>
                            <Link to="/careers" onClick={() => setIsOpen(false)} className="text-[17px] font-normal text-[#555555] hover:text-blue-700">Careers</Link>
                            <Link to="/newsroom" onClick={() => setIsOpen(false)} className="text-[17px] font-normal text-[#555555] hover:text-blue-700">Newsroom</Link>
                            <Link to="/blogs" onClick={() => setIsOpen(false)} className="text-[17px] font-normal text-[#555555] hover:text-blue-700">Blogs</Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-[17px] font-normal text-[#555555] hover:text-blue-700">Contact Us</Link>
                        </div>

                        {/* Social Icons matching screenshot layout */}
                        <div className="flex items-center gap-5 text-[#555555] mt-auto">
                            <a href="#" className="hover:text-blue-700 transition-colors font-bold text-lg" aria-label="LinkedIn">in</a>
                            <a href="#" className="hover:text-blue-700 transition-colors text-xl font-serif italic" aria-label="X">X</a>
                            <a href="#" className="hover:text-blue-700 transition-colors font-bold text-lg font-serif" aria-label="Facebook">f</a>
                            <a href="#" className="hover:text-blue-700 transition-colors" aria-label="YouTube">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <HelpBot isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
            <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </nav>
    );
};

export default Navbar;
