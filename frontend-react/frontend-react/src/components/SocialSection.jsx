
import { Play } from 'lucide-react';

const SocialSection = () => {
    return (
        <section id="video-showcase" className="py-20 lg:py-24 bg-white relative overflow-hidden font-body">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                
                {/* Common Header for both Image and Video */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Vision</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 leading-tight">
                        Noble Nexus <span className="text-teal-600">Our Offerings</span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed">
                        Noble Nexus offers cutting-edge eLearning solutions to enhance modern education and training environments. Join us in shaping the future of learning.
                    </p>
                </div>

                {/* Content Grid: Video and Image side-by-side */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                    
                    {/* Left Column: Video */}
                    <div className="flex flex-col justify-center h-full bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-100 shadow-xl">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-black ring-1 ring-slate-200/50 aspect-video">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/44QapafwJt0?rel=0"
                                title="Noble Nexus - Our Offerings"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Image matching layout perfectly */}
                    <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full rounded-3xl overflow-hidden shadow-xl group ring-1 ring-slate-100">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                            alt="Team Collaboration"
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Overlay Content aligned to bottom */}
                        <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-12 h-1 bg-teal-500 mb-6 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.6)] object-left"></div>
                            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Empowering Educators</h3>
                            <p className="text-slate-200 font-medium text-base md:text-lg leading-relaxed max-w-md">
                                Providing the intuitive tools necessary to inspire and guide the next generation of global leaders without limits.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
