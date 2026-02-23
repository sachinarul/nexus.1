import { Link } from 'react-router-dom';

const ServiceCTA = ({ title = "Ready To Transform?" }) => {
    return (
        <section className="py-24 bg-gradient-to-br from-navy to-black relative">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-5xl relative z-20 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    {title} <br />
                    <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Partner with Noble Nexus</span>
                </h2>

                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    Join over 5,000 institutions globally that trust Noble Nexus to power their educational future.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="px-10 py-5 bg-gradient-to-r from-teal to-purple text-white font-bold rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all">
                        Home
                    </Link>
                    <Link to="/contact" className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/10 backdrop-blur-md transition-all">
                        Talk To Sales
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceCTA;
