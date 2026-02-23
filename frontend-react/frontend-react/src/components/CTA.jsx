import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="bg-navy py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto backdrop-blur-3xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl relative group hover:border-teal/30 transition-all duration-500">

                    {/* Animated Glow Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal to-purple blur-[120px] animate-spin-slow opacity-30" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-purple">Accelerate?</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join the 500+ forward-thinking institutions already transforming education with Noble Nexus.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="px-10 py-4 bg-white text-navy font-bold rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
                            Home
                        </Link>
                        <Link to="/contact" className="px-10 py-4 border border-white/20 hover:bg-white/10 text-white font-bold rounded-lg transition-all backdrop-blur-sm">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
