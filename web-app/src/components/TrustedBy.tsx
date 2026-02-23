
const partners = [
    'Harvard', 'Stanford', 'MIT', 'Oxford', 'Cambridge', 'Yale'
];

const TrustedBy = () => {
    return (
        <div className="py-12 bg-navy/80 overflow-hidden border-y border-white/5">
            <div className="container mx-auto text-center">
                <p className="text-gray-500 text-sm font-medium tracking-widest uppercase mb-8">
                    Trusted by Innovative Institutions Worldwide
                </p>

                <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => (
                        <div
                            key={partner}
                            className="group text-2xl font-bold font-display text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                            <span className="hidden group-hover:inline-block w-2 h-2 rounded-full bg-teal mr-2 align-middle animate-pulse" />
                            {partner} University
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
