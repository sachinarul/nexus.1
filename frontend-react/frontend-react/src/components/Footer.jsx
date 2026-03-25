
const Footer = () => {
    return (
        <footer className="bg-[#F8FAFC] backdrop-blur-md border-t border-gray-200 pt-20 pb-12 text-sm">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Noble Nexus" className="w-10 h-10 object-contain" />
                        <span className="font-display font-bold text-2xl text-[#111111] tracking-widest">
                            NOBLE NEXUS
                        </span>
                    </div>
                    <p className="text-[#555555] leading-relaxed max-w-xs font-medium">
                        Pioneering the next era of educational infrastructure.
                        AI-driven, human-centric, and built for scale.
                    </p>
                    <div className="flex gap-4 text-[#555555] hover:text-[#0F766E] transition-colors">
                        {['Twitter', 'LinkedIn', 'YouTube', 'GitHub', 'Instagram'].map(social => (
                            <a key={social} href="#" className="hover:text-teal-600 transition-colors duration-300">
                                <span className="sr-only">{social}</span>
                                <div className="w-5 h-5 bg-current rounded-full opacity-50 hover:opacity-100" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold text-[#111111] mb-6 uppercase tracking-wider text-xs">Product</h4>
                    <ul className="space-y-4 text-[#555555] font-medium">
                        {['Features', 'Integrations', 'Pricing', 'Releases', 'Global'].map(link => (
                            <li key={link}><a href="#" className="hover:text-teal-600 transition-colors duration-200">{link}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-[#111111] mb-6 uppercase tracking-wider text-xs">Resources</h4>
                    <ul className="space-y-4 text-[#555555] font-medium">
                        {['Blog', 'Whitepapers', 'Case Studies', 'API Docs', 'Community'].map(link => (
                            <li key={link}><a href="#" className="hover:text-purple-600 transition-colors duration-200">{link}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-[#111111] mb-6 uppercase tracking-wider text-xs">Company</h4>
                    <ul className="space-y-4 text-[#555555] font-medium">
                        {['About Us', 'Careers', 'Brand', 'Legal', 'Contact'].map(link => (
                            <li key={link}><a href="#" className="hover:text-[#0F766E] transition-colors duration-200">{link}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[#555555] text-xs font-medium">
                <p>© 2026 Noble Nexus Inc</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-[#0F766E]">Privacy Policy</a>
                    <a href="#" className="hover:text-[#0F766E]">Terms of Service</a>
                    <a href="#" className="hover:text-[#0F766E]">Cookies Settings</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
