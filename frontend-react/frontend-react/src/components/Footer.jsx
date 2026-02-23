
const Footer = () => {
    return (
        <footer className="bg-navy-950/80 backdrop-blur-md border-t border-white/5 pt-20 pb-12 text-sm">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Noble Nexus" className="w-10 h-10 object-contain" />
                        <span className="font-display font-bold text-2xl text-white tracking-widest">
                            NOBLE NEXUS
                        </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-xs">
                        Pioneering the next era of educational infrastructure.
                        AI-driven, human-centric, and built for scale.
                    </p>
                    <div className="flex gap-4 text-gray-400 hover:text-white transition-colors">
                        {['Twitter', 'LinkedIn', 'YouTube', 'GitHub', 'Instagram'].map(social => (
                            <a key={social} href="#" className="hover:text-teal transition-colors duration-300">
                                <span className="sr-only">{social}</span>
                                <div className="w-5 h-5 bg-current rounded-full opacity-50 hover:opacity-100" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Product</h4>
                    <ul className="space-y-4 text-gray-400">
                        {['Features', 'Integrations', 'Pricing', 'Releases', 'Global'].map(link => (
                            <li key={link}><a href="#" className="hover:text-teal transition-colors duration-200">{link}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Resources</h4>
                    <ul className="space-y-4 text-gray-400">
                        {['Blog', 'Whitepapers', 'Case Studies', 'API Docs', 'Community'].map(link => (
                            <li key={link}><a href="#" className="hover:text-purple transition-colors duration-200">{link}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
                    <ul className="space-y-4 text-gray-400">
                        {['About Us', 'Careers', 'Brand', 'Legal', 'Contact'].map(link => (
                            <li key={link}><a href="#" className="hover:text-white transition-colors duration-200">{link}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                <p>© 2026 Noble Nexus Inc. All rights reserved.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                    <a href="#" className="hover:text-white">Cookies Settings</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
