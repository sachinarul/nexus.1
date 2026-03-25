
const Footer = () => {
    return (
        <footer className="bg-[#2D2E74] pt-12 pb-6 text-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Noble Nexus" className="w-10 h-10 object-contain" />
                        <span className="font-serif font-bold text-2xl text-white tracking-widest">
                            Noble Nexus
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                        {['Home', 'Why Noble Nexus', 'Products', 'Services', 'Elevate Coaching'].map(link => (
                            <a key={link} href="#" className="text-white hover:text-gray-300 text-xs font-semibold uppercase tracking-wider transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                <hr className="border-white/20 mb-6" />
                
                <div className="text-center text-white/80 text-xs font-medium">
                    <p>© Copyright 2026, All Rights Reserved by Noble Nexus</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
