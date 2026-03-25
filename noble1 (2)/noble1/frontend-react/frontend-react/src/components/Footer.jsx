
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
                
                <div className="flex flex-col md:flex-row items-center justify-between text-white/80 text-xs font-medium">
                    <p>© Copyright 2026, All Rights Reserved by Noble Nexus</p>
                    <div className="flex items-center gap-5 mt-4 md:mt-0">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                            <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
