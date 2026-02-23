
const partners = [
    { name: 'Stanford University', icon: '🏛️' },
    { name: 'MIT', icon: '🔬' },
    { name: 'Harvard', icon: '📚' },
    { name: 'Oxford', icon: '🏰' },
    { name: 'Cambridge', icon: '🎓' },
    { name: 'Yale', icon: '⚖️' },
    { name: 'Princeton', icon: '🐯' },
    { name: 'Columbia', icon: '🦁' }
];

const TrustedBy = () => {
    return (
        <div className="py-16 bg-navy relative border-y border-white/5 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-white/5 to-navy pointer-events-none"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <p className="text-gray-400 text-sm font-semibold tracking-[0.2em] uppercase mb-10">
                    Trusted by 500+ Institutions Worldwide
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group flex items-center gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
                        >
                            <span className="text-2xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{partner.icon}</span>
                            <span className="text-xl font-bold font-display text-gray-300 group-hover:text-white transition-colors">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
