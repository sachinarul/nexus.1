
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Building2, UserCircle, Briefcase, BarChart, LayoutDashboard, HelpCircle, LogOut, Video, Network } from 'lucide-react';
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out border-b backdrop-blur-3xl
            ${scrolled
                    ? 'bg-[#F8FAFC]/95 border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.05)]'
                    : 'bg-[#F8FAFC]/80 border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.05)] py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Brand Logo - Premium Effect */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group relative">
                        <img src="/logo.png" alt="Noble Nexus" className="w-30 h-20 object-contain group-hover:scale-110 transition-transform duration-500 bg-transparent border-none" />
                        <span className="text-xl font-bold font-sans tracking-tight text-[#111111] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F766E] group-hover:to-cyan-600 transition-all duration-300 drop-shadow-sm">
                            Noble Nexus
                        </span>
                    </Link>

                    {/* Desktop Menu - Glass Interactions */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/why-noble-nexus" className="relative text-[#111111] hover:text-[#0F766E] transition-colors text-sm font-bold tracking-wide group py-2 drop-shadow-sm">
                            Why Noble Nexus
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0F766E] to-blue-600 transition-all duration-300 group-hover:w-full opacity-80"></span>
                        </Link>

                        {/* Products Link */}
                        <div className="relative group/dropdown">
                            <button className="flex items-center gap-1 text-[#111111] font-bold hover:text-[#0F766E] transition-colors text-sm tracking-wide py-2 drop-shadow-sm">
                                Products <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300 opacity-90" />
                            </button>

                            {/* Dropdown Card */}
                            <div className="absolute top-full left-0 mt-4 w-[380px] bg-[#FFFFFF] border border-gray-200 rounded-2xl shadow-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-4 group-hover/dropdown:translate-y-0 overflow-hidden ring-1 ring-black/5 z-50">
                                {/* Decor Gradients */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-[40px] pointer-events-none"></div>

                                <div className="p-2 relative z-10">
                                    <div className="px-3 py-2 text-xs font-bold text-[#444444] uppercase tracking-widest border-b border-gray-100 mb-2">
                                        Core Platforms
                                    </div>
                                    {/* LMS Product */}
                                    <Link to="/products/lms" className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-teal-100 transition-all duration-300 group/item">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#0F766E] group-hover/item:bg-[#0F766E] group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110 shadow-sm border border-teal-100">
                                            <LayoutDashboard size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#111111] text-sm font-bold group-hover/item:text-[#0F766E] transition-colors mb-0.5">Learning Management Software (LMS)</h4>
                                            <p className="text-xs text-[#444444] font-medium">Comprehensive platform for modern education.</p>
                                        </div>
                                    </Link>
                                    {/* ClassBridge Product */}
                                    <Link to="/products/classbridge" className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-indigo-100 transition-all duration-300 group/item mt-1">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110 shadow-sm border border-indigo-100">
                                            <Network size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#111111] text-sm font-bold group-hover/item:text-indigo-600 transition-colors mb-0.5">ClassBridge</h4>
                                            <p className="text-xs text-[#444444] font-medium">EdTech AI Portal</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* General Tutor Link */}
                        <Link to="/general-tutor" className="relative text-[#111111] hover:text-[#0F766E] transition-colors text-sm font-bold tracking-wide group py-2 drop-shadow-sm">
                            General Tutor
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0F766E] to-blue-600 transition-all duration-300 group-hover:w-full opacity-80"></span>
                        </Link>

                        {/* Services Mega Menu */}
                        <div className="relative group/dropdown">
                            <button className="flex items-center gap-1 text-[#111111] font-bold hover:text-[#0F766E] transition-colors text-sm tracking-wide py-2 drop-shadow-sm">
                                Services <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300 opacity-90" />
                            </button>

                            {/* Dropdown Card */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-[#FFFFFF] border border-gray-200 rounded-2xl shadow-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-4 group-hover/dropdown:translate-y-0 overflow-hidden ring-1 ring-black/5 z-50">
                                {/* Decor Gradients */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-[80px] pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-[80px] pointer-events-none"></div>

                                <div className="p-6 grid grid-cols-3 gap-4 relative z-10">
                                    {/* Card 1: K-12 */}
                                    <Link to="/services/k12" className="flex flex-col gap-3 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-teal-100 transition-all duration-300 group/card">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#0F766E] group-hover/card:bg-[#0F766E] group-hover/card:text-white transition-all duration-300 group-hover/card:scale-110 shadow-sm border border-teal-100">
                                            <BookOpen size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#111111] text-sm font-bold group-hover/card:text-[#0F766E] transition-colors mb-1">K-12 Education</h4>
                                            <p className="text-xs text-[#444444] leading-relaxed font-medium">Digital classrooms & AI-driven school management.</p>
                                        </div>
                                    </Link>

                                    {/* Card 2: Higher Ed */}
                                    <Link to="/services/higher-education" className="flex flex-col gap-3 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-blue-200 transition-all duration-300 group/card">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover/card:bg-[#2563EB] group-hover/card:text-white transition-all duration-300 group-hover/card:scale-110 shadow-sm border border-blue-200">
                                            <GraduationCap size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#111111] text-sm font-bold group-hover/card:text-[#2563EB] transition-colors mb-1">Higher Education</h4>
                                            <p className="text-xs text-[#444444] leading-relaxed font-medium">Comprehensive University ERP & research portals.</p>
                                        </div>
                                    </Link>

                                    {/* Card 3: Corporate */}
                                    <Link to="/services/corporate-learning" className="flex flex-col gap-3 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-purple-200 transition-all duration-300 group/card">
                                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 group-hover/card:bg-purple-600 group-hover/card:text-white transition-all duration-300 group-hover/card:scale-110 shadow-sm border border-purple-200">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#111111] text-sm font-bold group-hover/card:text-purple-600 transition-colors mb-1">Corporate Learning</h4>
                                            <p className="text-xs text-[#444444] leading-relaxed font-medium">Enterprise LMS & workforce upskilling platforms.</p>
                                        </div>
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


                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="/meet"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-50 border border-teal-100 hover:bg-teal-100 text-[#0F766E] transition-all shadow-sm group"
                            title="Video Meetings"
                        >
                            <Video size={20} className="group-hover:scale-110 transition-transform" />
                        </Link>

                        <button
                            onClick={() => setIsHelpOpen(true)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/20 text-[#111111] transition-all shadow-sm group"
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
                                        <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center text-white font-bold text-sm">
                                            {currentUser.displayName ? currentUser.displayName.charAt(0) : <UserCircle size={20} />}
                                        </div>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => logout()}
                                    className="p-2 ml-2 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-full transition-all"
                                    title="Sign Out"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="px-6 py-2 bg-[#FFFFFF] text-[#0F766E] border-[#0F766E] border-2 rounded-full text-sm font-bold transition-all shadow-sm hover:bg-teal-50">
                                    Log in
                                </Link>
                                <Link to="/signup" className="group relative px-6 py-2.5 bg-[#0F766E] hover:bg-teal-700 text-[#FFFFFF] font-bold rounded-full shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 text-sm overflow-hidden">
                                    <span className="relative z-10">Sign Up</span>
                                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left"></div>
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
                            <Link to="/why-noble-nexus" onClick={() => setIsOpen(false)} className="block flex items-center justify-between py-4 px-4 text-lg font-bold text-[#111111] hover:bg-gray-50 rounded-2xl transition-all border border-transparent hover:border-gray-200">
                                Why Noble Nexus
                                <ChevronDown size={18} className="-rotate-90 text-gray-400" />
                            </Link>

                            {/* Products Section */}
                            <div className="py-2 bg-gray-50 rounded-2xl border border-gray-200">
                                <span className="block px-5 py-3 text-xs font-bold text-[#0F766E] uppercase tracking-widest border-b border-gray-200">Products</span>
                                <div className="p-2 space-y-1">
                                    <Link to="/products/lms" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#0F766E] shadow-sm">
                                            <LayoutDashboard size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-base font-bold text-[#111111]">LMS Platform</span>
                                            <span className="block text-xs text-[#555555] font-medium mt-0.5">Core education platform</span>
                                        </div>
                                    </Link>
                                    <Link to="/products/classbridge" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
                                            <Network size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-base font-bold text-[#111111]">ClassBridge</span>
                                            <span className="block text-xs text-[#555555] font-medium mt-0.5">EdTech AI Portal</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* General Tutor Link */}
                            <Link to="/general-tutor" onClick={() => setIsOpen(false)} className="block flex items-center justify-between py-4 px-4 text-lg font-bold text-[#111111] hover:bg-gray-50 rounded-2xl transition-all border border-transparent hover:border-gray-200">
                                General Tutor
                                <span className="w-[18px]"></span>
                            </Link>

                            {/* Services Section */}
                            <div className="py-2 bg-gray-50 rounded-2xl border border-gray-200">
                                <span className="block px-5 py-3 text-xs font-bold text-[#0F766E] uppercase tracking-widest border-b border-gray-200">Services</span>
                                <div className="p-2 space-y-1">
                                    <Link to="/services/k12" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#0F766E] shadow-sm">
                                            <BookOpen size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-base font-bold text-[#111111]">K-12 Education</span>
                                            <span className="block text-xs text-[#555555] font-medium mt-0.5">Digital classrooms</span>
                                        </div>
                                    </Link>
                                    <Link to="/services/higher-education" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB] shadow-sm">
                                            <GraduationCap size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-base font-bold text-[#111111]">Higher Education</span>
                                            <span className="block text-xs text-[#555555] font-medium mt-0.5">University ERP</span>
                                        </div>
                                    </Link>
                                    <Link to="/services/corporate-learning" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-all shadow-sm">
                                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm">
                                            <Briefcase size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="block text-base font-bold text-[#111111]">Corporate Learning</span>
                                            <span className="block text-xs text-[#555555] font-medium mt-0.5">Workforce platforms</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>

                        {/* Mobile Actions Bottom */}
                        <div className="mt-8 pt-6 border-t border-gray-200 space-y-4 pb-20">
                            <div className="grid grid-cols-2 gap-3">
                                <Link
                                    to="/meet"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-3.5 flex items-center justify-center gap-2 bg-teal-50 border border-teal-200 rounded-2xl text-[#0F766E] font-bold hover:bg-teal-100 transition-colors shadow-sm"
                                >
                                    <Video size={18} /> Meetings
                                </Link>
                                <button
                                    onClick={() => { setIsHelpOpen(true); setIsOpen(false); }}
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
                                    <Link to="/signup" onClick={() => setIsOpen(false)} className="py-3.5 px-4 bg-[#0F766E] hover:bg-teal-700 text-white font-bold rounded-2xl shadow-md transition-transform active:scale-95 text-center">
                                        Sign Up
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
        </nav>
    );
};

export default Navbar;
