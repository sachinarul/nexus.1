
import { Play } from 'lucide-react';

const SocialSection = () => {
    return (
        <section id="video-showcase" className="py-16 bg-[#ffffff] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Common Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-teal font-medium tracking-widest text-sm uppercase mb-3 block text-[#0F766E]">Our Vision</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#000000] mb-5 tracking-tight">
                        Noble Nexus <span className="text-[#0F766E]">Our Offerings</span>
                    </h2>
                    <p className="text-lg text-gray-700 font-medium leading-relaxed">
                        Noble Nexus offers cutting-edge eLearning solutions to enhance modern education and training environments. Join us in shaping the future of learning.
                    </p>
                </div>

                {/* Symmetrical Grid for Media */}
                <div className="grid lg:grid-cols-2 gap-8 items-stretch pt-2">
                    {/* Left Column: Video Container */}
                    <div className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl bg-[#000000] group ring-1 ring-black/5 hover:shadow-3xl transition-shadow duration-500">
                        <iframe
                            className="w-full h-full bg-[#000000]"
                            src="https://www.youtube.com/embed/44QapafwJt0?rel=0"
                            title="Noble Nexus - Our Offerings"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Right Column: Image Presentation */}
                    <div className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl bg-[#ffffff] ring-1 ring-black/5 flex flex-col">
                        {/* Image takes all remaining space without being overlapped */}
                        <div className="relative flex-1 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                                alt="Team Collaboration"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Reduced text size and padding, sitting below the image */}
                        <div className="p-4 sm:p-5 bg-[#ffffff] border-t border-gray-100 shrink-0">
                            <h3 className="text-lg font-bold text-[#000000] mb-1">Empowering Educators</h3>
                            <p className="text-[#555555] font-semibold text-xs leading-relaxed">Providing the tools and platforms to inspire the next generation of modern education.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
