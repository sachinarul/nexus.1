
const instagramPosts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        likes: 120,
        type: "Reel",
        caption: "Reimagining the modern classroom with AI-driven insights to boost student engagement. #EdTech #NobleNexus"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        likes: 95,
        type: "Post",
        caption: "Behind the scenes at our Dublin HQ! Building the future of education together. 🇮🇪 #TeamNexus"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        likes: 156,
        type: "Reel",
        caption: "Our new Veda dashboard is live! Seamless data visualization for educators. #Innovation #SaaS"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        likes: 210,
        type: "Post",
        caption: "Empowering universities globally with smart ERP solutions. 🎓"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        likes: 180,
        type: "Reel",
        caption: "Workshop day! exploring new frontiers in adaptive learning algorithms."
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        likes: 134,
        type: "Post",
        caption: "Join the revolution. Noble Nexus is hiring! Check the link in bio."
    },
];

const InstagramFeed = () => {
    return (
        <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex items-center justify-between mb-6 sticky top-0 bg-[#F8FAFC]/95 backdrop-blur-md z-10 py-2 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                        <div className="w-full h-full bg-[#FFFFFF] rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#111111] font-bold text-sm">@nexus_noble</h3>
                        <p className="text-[#555555] text-xs">Posts & Reels</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/nexus_noble?igsh=ZWJwc3Zvdmc0NmRw" target="_blank" rel="noopener noreferrer" className="text-xs text-white hover:text-white transition-colors border border-transparent px-3 py-1 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">Follow</a>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {instagramPosts.map((post) => (
                    <div key={post.id} className="group relative aspect-[9/16] bg-[#FFFFFF] rounded-lg overflow-hidden cursor-pointer shadow-sm border border-gray-200">
                        <img src={post.image} alt="IG Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                        {/* Reel Icon if applicable */}
                        {post.type === 'Reel' && (
                            <div className="absolute top-2 right-2">
                                <svg className="w-4 h-4 text-white drop-shadow-md" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" /></svg>
                            </div>
                        )}

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                            <div className="flex items-center gap-1 text-white text-xs mb-1">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                <span className="font-bold">{post.likes}</span>
                            </div>
                            <p className="text-gray-300 text-[10px] line-clamp-3 leading-tight">
                                {post.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 text-center">
                <a href="https://www.instagram.com/nexus_noble?igsh=ZWJwc3Zvdmc0NmRw" target="_blank" className="text-xs text-[#555555] hover:text-[#111111] font-medium transition-colors">View full profile on Instagram →</a>
            </div>
        </div>
    );
};

export default InstagramFeed;
