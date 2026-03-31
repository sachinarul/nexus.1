
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
                                        <div className="flex-1">
                                            <h4 className="text-[#111111] text-sm font-bold group-hover/item:text-indigo-600 transition-colors">ClassBridge</h4>
                                            <p className="text-xs text-[#444444] font-medium">EdTech AI Portal</p>
                                        </div>
                                    </Link>

                                    {/* LMS Product */}
                                    <Link to="/products/lms" className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-teal-100 transition-all duration-300 group/item mt-1">
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
                                        <h4 className="text-[#111111] text-sm font-bold group-hover/card:text-[#0F766E] transition-colors">K-12 Education</h4>
                                    </Link>

                                    {/* Card 2: Higher Ed */}
                                    <Link to="/services/higher-education" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 group/card shadow-sm hover:shadow-md">
                                        <h4 className="text-[#111111] text-sm font-bold group-hover/card:text-[#2563EB] transition-colors">Higher Education</h4>
                                    </Link>

                                    {/* Card 3: Corporate */}
                                    <Link to="/services/corporate-learning" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 group/card shadow-sm hover:shadow-md">
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
                <div className="md:hidden fixed inset-0 z-40 bg-[#FFFFFF] animate-fade-in-down overflow-y-auto pt-24 border-t border-gray-200 flex flex-col min-h-screen">
                    <div className="px-6 pb-8 flex-1 flex flex-col space-y-4">
                        <div className="space-y-2 mt-2">
                            {/* Products Section */}
                            <div className="py-2 bg-gray-50 rounded-2xl border border-gray-200">
                                <span className="block px-5 py-3 text-xs font-bold text-[#0F766E] uppercase tracking-widest border-b border-gray-200">Products</span>
                                <div className="p-2 space-y-1">
                                    <Link to="/products/classbridge" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <div className="flex-1">
                                            <span className="block text-base font-bold text-[#111111]">ClassBridge</span>
                                            <span className="block text-xs text-[#555555] font-medium mt-0.5">EdTech AI Portal</span>
                                        </div>
                                    </Link>
                                    <Link to="/products/lms" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <div className="flex-1">
                                            <span className="block text-base font-bold text-[#111111]">LMS Platform</span>
                                            <span className="block text-xs text-[#555555] font-medium mt-0.5">Core education platform</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Services Section */}
                            <div className="py-2 bg-gray-50 rounded-2xl border border-gray-200">
                                <span className="block px-5 py-3 text-xs font-bold text-[#0F766E] uppercase tracking-widest border-b border-gray-200">Services</span>
                                <div className="p-2 space-y-1">
                                    <Link to="/services/k12" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <span className="text-base font-bold text-[#111111]">K-12 Education</span>
                                    </Link>
                                    <Link to="/services/higher-education" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <span className="text-base font-bold text-[#111111]">Higher Education</span>
                                    </Link>
                                    <Link to="/services/corporate-learning" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <span className="text-base font-bold text-[#111111]">Corporate Learning</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Elevate Coaching Link */}
                            <Link to="/elevate-coaching" onClick={() => setIsOpen(false)} className="block flex items-center justify-between py-4 px-4 text-lg font-bold text-[#111111] hover:bg-gray-50 rounded-2xl transition-all border border-transparent hover:border-gray-200">
                                Elevate Coaching
                                <span className="w-[18px]"></span>
                            </Link>

                            <Link to="/why-noble-nexus" onClick={() => setIsOpen(false)} className="block flex items-center justify-between py-4 px-4 text-lg font-bold text-[#111111] hover:bg-gray-50 rounded-2xl transition-all border border-transparent hover:border-gray-200">
                                Why Noble Nexus
                                <ChevronDown size={18} className="-rotate-90 text-gray-400" />
                            </Link>

                        </div>

                        {/* Mobile Actions Bottom */}
                        <div className="mt-8 pt-6 border-t border-gray-200 space-y-4 pb-20">
                            <div className="grid grid-cols-1 gap-3">
                                <button
                                    onClick={() => { setIsChatOpen(true); setIsOpen(false); }}
                                    className="w-full py-3.5 flex items-center justify-center gap-2 bg-transparent border-2 border-[#0F766E] rounded-2xl text-[#0F766E] font-bold hover:bg-teal-50 transition-colors shadow-sm"
                                >
                                    <HelpCircle size={18} /> Support
                                </button>
                            </div>

                            {!currentUser ? (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link to="/login" onClick={() => setIsOpen(false)} className="py-3.5 px-4 bg-transparent border-2 border-[#0F766E] hover:bg-teal-50 rounded-2xl text-[#0F766E] font-bold transition-colors text-center shadow-sm">
                                        Log in
                                    </Link>
                                    <Link to="/contact" onClick={() => setIsOpen(false)} className="py-3.5 px-4 bg-[#0F766E] hover:bg-teal-700 text-white font-bold rounded-2xl shadow-md transition-transform active:scale-95 text-center">
                                        Contact Us
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link to="/dashboard" onClick={() => setIsOpen(false)} className="py-3.5 px-4 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-2xl text-[#0F766E] font-bold transition-colors text-center flex justify-center items-center shadow-sm">
                                        Dashboard
                                    </Link>
                                    <button onClick={() => { logout(); setIsOpen(false); }} className="py-3.5 px-4 bg-transparent hover:bg-red-50 border-2 border-red-500 rounded-2xl text-red-500 font-bold transition-colors text-center flex justify-center items-center shadow-sm">
                                        Sign Out
                                    </button>
                                </div>
                            )}
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
