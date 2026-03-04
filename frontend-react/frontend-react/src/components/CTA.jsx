import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="bg-[#FFFFFF] py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto backdrop-blur-3xl bg-[#F8FAFC] border border-gray-200 rounded-3xl p-12 md:p-20 shadow-xl relative group hover:border-teal-300 transition-all duration-500">

                    {/* Animated Glow Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-10 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-200 to-blue-200 blur-[120px] animate-spin-slow opacity-30" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight text-[#111111]">
                        Ready to <span className="text-[#2563EB]">Accelerate?</span>
                    </h2>

                    <p className="text-xl text-[#555555] font-medium mb-10 max-w-2xl mx-auto">
                        Join the 500+ forward-thinking institutions already transforming education with Noble Nexus.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="px-10 py-4 bg-[#0F766E] text-white hover:bg-teal-700 font-bold rounded-lg shadow-md transition-all hover:scale-105">
                            Home
                        </Link>
                        <Link to="/contact" className="px-10 py-4 border-2 border-[#111111] hover:bg-gray-50 text-[#111111] font-bold rounded-lg transition-all shadow-sm">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
