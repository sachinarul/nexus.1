
const Products = () => {
    const products = [
        {
            category: "AI Educational Portal",
            name: "ClassBridge",
            description: "A full-featured, AI-powered EdTech platform with seamless integration for tutors, students, and administration.",
            gradient: "from-indigo-600 to-purple-500",
            icon: "🧠"
        },
        {
            category: "Learning Experience",
            name: "Veda",
            description: "An AI-powered learning environment that adapts content to individual student needs and learning styles.",
            gradient: "from-purple-600 to-pink-500",
            icon: "🎓"
        },
        {
            category: "Core Infrastructure",
            name: "Noble ERP",
            description: "The complete operating system for modern campuses. Automates admissions, finance, HR, and library management.",
            gradient: "from-blue-600 to-cyan-500",
            icon: "🏢"
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
        <section id="products" className="py-16 bg-[#FFFFFF] relative border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-14">
                    <span className="text-[#0F766E] font-bold tracking-widest text-sm uppercase mb-4 block">Our Platforms</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] mb-6">
                        Integrated Solutions for <br />
                        <span className="text-[#2563EB]">Seamless Education</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    {products.map((product, index) => (
                        <div key={index} className="relative">
                            <div className="relative">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} bg-opacity-10 flex items-center justify-center text-2xl shadow-sm mb-8`}>
                                    {product.icon}
                                </div>

                                <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-3 block">{product.category}</span>
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{product.name}</h3>
                                <p className="text-[#334155] font-medium leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
