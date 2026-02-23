
const Products = () => {
    const products = [
        {
            category: "Core Infrastructure",
            name: "Noble ERP",
            description: "The complete operating system for modern campuses. Automates admissions, finance, HR, and library management.",
            gradient: "from-blue-600 to-cyan-500",
            icon: "🏢"
        },
        {
            category: "Learning Experience",
            name: "Nexus LMS",
            description: "An AI-powered learning environment that adapts content to individual student needs and learning styles.",
            gradient: "from-purple-600 to-pink-500",
            icon: "🎓"
        },
        {
            category: "Digital Transformation",
            name: "Smart Content Suite",
            description: "Tools for creating, managing, and distributing interactive digital curriculum at scale.",
            gradient: "from-amber-500 to-orange-600",
            icon: "📚"
        }
    ];

    return (
        <section id="products" className="py-32 bg-navy relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-24">
                    <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Our Platforms</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Integrated Solutions for <br />
                        <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Seamless Education</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <div key={index} className="group relative">
                            {/* Card Background with Tilt/Glow Effect */}
                            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-20 blur-xl group-hover:opacity-40 transition duration-500`}></div>

                            <div className="relative bg-navy-900 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-3xl shadow-lg mb-8`}>
                                    {product.icon}
                                </div>

                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{product.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-4">{product.name}</h3>
                                <p className="text-gray-400 leading-relaxed mb-auto">
                                    {product.description}
                                </p>

                                <button className="mt-8 py-3 w-full border border-white/10 rounded-lg text-white font-medium hover:bg-white/5 transition-colors group-hover:border-white/30 flex items-center justify-center gap-2">
                                    Experience Demo <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
