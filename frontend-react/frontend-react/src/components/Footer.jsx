import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#2B2671] text-white py-10 lg:py-16 font-body selection:bg-[#00E5FF] selection:text-black">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Upper Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
                    
                    {/* Brand */}
                    <div className="flex items-center gap-4">
                        <img src="/logo.png" alt="Noble Nexus Logo" className="w-[50px] h-[50px] object-contain rounded drop-shadow-md" />
                        <span className="font-serif text-3xl font-medium tracking-wide text-white">
                            Noble Nexus
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-4 lg:max-w-none max-w-3xl">
                        <Link to="/" className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors duration-300">
                            Noble Nexus
                        </Link>
                        <Link to="/products" className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors duration-300">
                            Products
                        </Link>
                        <Link to="/services" className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors duration-300">
                            Services
                        </Link>
                        <Link to="/elevate-coaching" className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors duration-300">
                            Elevate Coaching
                        </Link>
                        <Link to="/why-noble-nexus" className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors duration-300">
                            Why Noble Nexus
                        </Link>
                    </nav>
                </div>

                {/* Subtle Divider */}
                <div className="w-full h-[1px] bg-white/10 my-10"></div>

                {/* Lower Section: Copyright */}
                <div className="text-center">
                    <p className="text-sm font-bold text-white tracking-wide">
                        © Copyright 2026, All Rights Reserved by Noble Nexus
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
