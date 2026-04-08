
const facebookPosts = [
    {
        id: 1,
        author: "Noble Nexus",
        date: "5 hours ago",
        content: "📚 Did you know? Over 400 schools now use Noble Nexus to automate their grading systems. That's 10,000+ teacher hours saved! ⏳",
        stats: "152 Reactions • 8 Shares"
    },
    {
        id: 2,
        author: "Noble Nexus",
        date: "Yesterday",
        content: "Happy Teacher's Day! 🍎 Celebrating the heroes who shape our future. We are offering a 20% discount on all premium Veda plans this week.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        stats: "482 Reactions • 56 Shares"
    },
    {
        id: 3,
        author: "Noble Nexus",
        date: "3 days ago",
        content: "We are live! Check out our new 'Parent Portal' feature. Improved communication between home and school. 🏠🏫",
        stats: "89 Reactions • 12 Comments"
    }
];

const FacebookFeed = () => {
    return (
        <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex items-center justify-between mb-6 sticky top-0 bg-[#F8FAFC]/95 backdrop-blur-md z-10 py-2 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692 1.22 0 1.87.1 2.191.133v1.908z" /></svg>
                    </div>
                    <div>
                        <h3 className="text-[#111111] font-bold text-sm">Noble Nexus</h3>
                        <p className="text-[#555555] text-xs">Education Website</p>
                    </div>
                </div>
                <button className="text-xs text-[#1877F2] bg-blue-50 hover:bg-blue-100 font-bold px-3 py-1.5 rounded transition-colors flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg> Like
                </button>
            </div>

            <div className="space-y-4">
                {facebookPosts.map((post) => (
                    <div key={post.id} className="bg-[#FFFFFF] rounded-xl border border-gray-200 p-4 hover:border-gray-300 shadow-sm transition-colors">
                        <div className="flex gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#1877F2]"></div>
                            <div>
                                <h4 className="text-[#111111] text-sm font-bold">{post.author}</h4>
                                <p className="text-[#555555] text-[10px]">{post.date} • 🌍</p>
                            </div>
                        </div>

                        <p className="text-[#333333] text-sm mb-3">
                            {post.content}
                        </p>

                        {post.image && (
                            <img src={post.image} alt="FB Post" className="w-full rounded-lg mb-3 border border-gray-200" />
                        )}

                        <div className="flex items-center justify-between text-xs text-[#555555] pt-3 border-t border-gray-200">
                            <div className="flex items-center gap-1">
                                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center p-[2px]">👍</div>
                                <span>{post.stats}</span>
                            </div>
                            <span>8 Shares</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 text-center">
                <a href="https://www.facebook.com/share/1QyeyH9suF/" target="_blank" className="text-xs text-[#555555] hover:text-[#111111] font-medium transition-colors">Go to Facebook Page →</a>
            </div>
        </div>
    );
};

export default FacebookFeed;
