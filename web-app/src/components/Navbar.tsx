import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-navy/80 border-b border-white/10 shadow-lg shadow-purple-500/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Sparkles className="h-8 w-8 text-teal" />
                        <span className="text-2xl font-bold font-display tracking-wider bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                            NOBLE NEXUS
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Platform', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-teal transition-colors duration-300 text-sm font-medium tracking-wide">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-gray-300 hover:text-white font-medium transition-colors">Log in</button>
                        <button className="relative px-6 py-2 bg-gradient-to-r from-teal to-purple rounded-full text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 text-sm uppercase tracking-wider">
                            Book Demo
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute w-full bg-navy/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['Platform', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">
                                {item}
                            </a>
                        ))}
                        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-4 px-3">
                            <button className="w-full text-left text-gray-300 hover:text-white">Log in</button>
                            <button className="w-full px-6 py-3 bg-gradient-to-r from-teal to-purple rounded-lg text-white font-semibold text-center">
                                Book Demo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
