
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Building2, UserCircle, Briefcase, BarChart, LayoutDashboard, HelpCircle } from 'lucide-react';
import HelpBot from './HelpBot';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
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
            className={`fixed w-full z-50 transition-all duration-300 ease-out border-b border-white/5 backdrop-blur-3xl
            ${scrolled
                    ? 'bg-navy-900/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-navy-900/40 border-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Brand Logo - Premium Effect */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group relative overflow-hidden">
                        <img src="/logo.png" alt="Noble Nexus" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-500" />
                        <span className="text-xl font-bold font-sans tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal group-hover:to-cyan-400 transition-all duration-300">
                            Noble Nexus
                        </span>
                    </Link>

                    {/* Desktop Menu - Glass Interactions */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/why-noble-nexus" className="relative text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide group py-2">
                            Why Noble Nexus
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal to-blue-500 transition-all duration-300 group-hover:w-full opacity-80"></span>
                        </Link>

                        {/* Products Link */}
                        <div className="relative group/dropdown">
                            <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide py-2 group-hover/dropdown:text-teal">
                                Products <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300 opacity-70" />
                            </button>

                            {/* Dropdown Card */}
                            <div className="absolute top-full left-0 mt-4 w-[380px] bg-[#0F121E]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-4 group-hover/dropdown:translate-y-0 overflow-hidden ring-1 ring-white/5 z-50">
                                {/* Decor Gradients */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-[40px] pointer-events-none"></div>

                                <div className="p-2 relative z-10">
                                    <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 mb-2">
                                        Core Platforms
                                    </div>
                                    {/* LMS Product */}
                                    <Link to="/products/lms" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 border border-white/0 hover:border-white/10 transition-all duration-300 group/item bg-gradient-to-br from-white/[0.02] to-transparent">
                                        <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal group-hover/item:bg-teal group-hover/item:text-navy-900 transition-all duration-300 group-hover/item:scale-110 shadow-sm border border-teal/10">
                                            <LayoutDashboard size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-sm font-bold group-hover/item:text-teal transition-colors mb-0.5">Learning Management Software (LMS)</h4>
                                            <p className="text-xs text-gray-400 font-light">Comprehensive platform for modern education.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Services Mega Menu */}
                        <div className="relative group/dropdown">
                            <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide py-2 group-hover/dropdown:text-teal">
                                Services <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300 opacity-70" />
                            </button>

                            {/* Dropdown Card */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-[#0F121E]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-4 group-hover/dropdown:translate-y-0 overflow-hidden ring-1 ring-white/5 z-50">
                                {/* Decor Gradients */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-[80px] pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple/5 rounded-full blur-[80px] pointer-events-none"></div>

                                <div className="p-6 grid grid-cols-3 gap-4 relative z-10">
                                    {/* Card 1: K-12 */}
                                    <Link to="/services/k12" className="flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 border border-white/0 hover:border-white/10 transition-all duration-300 group/card bg-gradient-to-br from-white/[0.02] to-transparent">
                                        <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal group-hover/card:bg-teal group-hover/card:text-navy-900 transition-all duration-300 group-hover/card:scale-110 shadow-sm border border-teal/10">
                                            <BookOpen size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-sm font-bold group-hover/card:text-teal transition-colors mb-1">K-12 Education</h4>
                                            <p className="text-xs text-gray-400 leading-relaxed font-light">Digital classrooms & AI-driven school management.</p>
                                        </div>
                                    </Link>

                                    {/* Card 2: Higher Ed */}
                                    <Link to="/services/higher-education" className="flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 border border-white/0 hover:border-white/10 transition-all duration-300 group/card bg-gradient-to-br from-white/[0.02] to-transparent">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/card:bg-blue-500 group-hover/card:text-navy-900 transition-all duration-300 group-hover/card:scale-110 shadow-sm border border-blue-500/10">
                                            <GraduationCap size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-sm font-bold group-hover/card:text-blue-400 transition-colors mb-1">Higher Education</h4>
                                            <p className="text-xs text-gray-400 leading-relaxed font-light">Comprehensive University ERP & research portals.</p>
                                        </div>
                                    </Link>

                                    {/* Card 3: Corporate */}
                                    <Link to="/services/corporate-learning" className="flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 border border-white/0 hover:border-white/10 transition-all duration-300 group/card bg-gradient-to-br from-white/[0.02] to-transparent">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover/card:bg-purple-500 group-hover/card:text-navy-900 transition-all duration-300 group-hover/card:scale-110 shadow-sm border border-purple-500/10">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-sm font-bold group-hover/card:text-purple-400 transition-colors mb-1">Corporate Learning</h4>
                                            <p className="text-xs text-gray-400 leading-relaxed font-light">Enterprise LMS & workforce upskilling platforms.</p>
                                        </div>
                                    </Link>
                                </div>

                                {/* Dropdown Footer */}
                                <div className="bg-white/[0.02] p-3 text-center border-t border-white/5 backdrop-blur-sm">
                                    <Link to="/services" className="text-xs font-semibold text-gray-400 hover:text-white flex items-center justify-center gap-1 transition-colors uppercase tracking-wider">
                                        View All Solutions <span className="text-teal group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => setIsHelpOpen(true)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all shadow-sm group"
                            title="Get Help"
                        >
                            <HelpCircle size={20} className="group-hover:scale-110 transition-transform" />
                        </button>

                        {currentUser ? (
                            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                                <Link to="/dashboard" className="flex items-center gap-3 group">
                                    <div className="text-right hidden xl:block">
                                        <p className="text-sm font-bold text-white group-hover:text-teal transition-colors">{currentUser.displayName || 'User'}</p>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Dashboard</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-blue-600 p-[2px]">
                                        <div className="w-full h-full rounded-full bg-navy-900 flex items-center justify-center text-white font-bold text-sm">
                                            {currentUser.displayName ? currentUser.displayName.charAt(0) : <UserCircle size={20} />}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="px-6 py-2 text-gray-300 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/5 rounded-full text-sm font-semibold transition-all backdrop-blur-sm">
                                    Log in
                                </Link>
                                <Link to="/signup" className="group relative px-6 py-2.5 bg-gradient-to-r from-teal to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-95 text-sm overflow-hidden">
                                    <span className="relative z-10">Sign Up</span>
                                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left"></div>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2 focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-xl animate-fade-in-down overflow-y-auto pt-24 border-t border-white/10 flex flex-col min-h-screen">
                    <div className="px-6 pb-8 flex-1 flex flex-col space-y-4">
                        <div className="space-y-2 mt-2">
                            <Link to="/why-noble-nexus" onClick={() => setIsOpen(false)} className="block flex items-center justify-between py-4 px-4 text-lg font-medium text-white hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/10">
                                Why Noble Nexus
                                <ChevronDown size={18} className="-rotate-90 text-gray-500" />
                            </Link>

                            {/* Products Section */}
                            <div className="py-2 bg-white/5 rounded-2xl border border-white/5">
                                <span className="block px-5 py-3 text-xs font-bold text-teal uppercase tracking-widest border-b border-white/5">Products</span>
                                <div className="p-2 space-y-1">
                                    <Link to="/products/lms" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shadow-inner shadow-teal/20">
                                            <LayoutDashboard size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-base font-semibold text-gray-200">LMS Platform</span>
                                            <span className="block text-xs text-gray-400 mt-0.5">Core education platform</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Services Section */}
                            <div className="py-2 bg-white/5 rounded-2xl border border-white/5">
                                <span className="block px-5 py-3 text-xs font-bold text-teal uppercase tracking-widest border-b border-white/5">Services</span>
                                <div className="p-2 space-y-1">
                                    <Link to="/services/k12" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shadow-inner shadow-teal/20">
                                            <BookOpen size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-base font-semibold text-gray-200">K-12 Education</span>
                                            <span className="block text-xs text-gray-400 mt-0.5">Digital classrooms</span>
                                        </div>
                                    </Link>
                                    <Link to="/services/higher-education" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-inner shadow-blue-500/20">
                                            <GraduationCap size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-base font-semibold text-gray-200">Higher Education</span>
                                            <span className="block text-xs text-gray-400 mt-0.5">University ERP</span>
                                        </div>
                                    </Link>
                                    <Link to="/services/corporate-learning" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shadow-inner shadow-purple-500/20">
                                            <Briefcase size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-base font-semibold text-gray-200">Corporate Learning</span>
                                            <span className="block text-xs text-gray-400 mt-0.5">Workforce platforms</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Actions Bottom */}
                        <div className="mt-8 pt-6 border-t border-white/10 space-y-4 pb-20">
                            <button
                                onClick={() => { setIsHelpOpen(true); setIsOpen(false); }}
                                className="w-full py-3.5 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition-colors"
                            >
                                <HelpCircle size={18} className="text-gray-400" /> Help & Support
                            </button>

                            {!currentUser ? (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link to="/login" onClick={() => setIsOpen(false)} className="py-3.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-semibold transition-colors text-center">
                                        Log in
                                    </Link>
                                    <Link to="/signup" onClick={() => setIsOpen(false)} className="py-3.5 px-4 bg-gradient-to-r from-teal to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold rounded-2xl shadow-lg transition-transform active:scale-95 text-center">
                                        Sign Up
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link to="/dashboard" onClick={() => setIsOpen(false)} className="py-3.5 px-4 bg-teal/10 hover:bg-teal/20 border border-teal/20 rounded-2xl text-teal font-semibold transition-colors text-center flex justify-center items-center">
                                        Dashboard
                                    </Link>
                                    <button onClick={() => { logout(); setIsOpen(false); }} className="py-3.5 px-4 bg-white/5 hover:bg-red-500/10 border border-white/10 rounded-2xl text-gray-300 font-semibold transition-colors text-center flex justify-center items-center">
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <HelpBot isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        </nav>
    );
};

export default Navbar;
