
const linkedInPosts = [
    {
        id: 1,
        author: "Noble Nexus",
        role: "Education Technology Company",
        date: "2 days ago",
        content: "We are thrilled to announce our strategic partnership with Global EdTech Alliance! 🌍 Together, we are bridging the digital divide in rural education infrastructure. #Partnership #EdTech #Innovation",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        stats: "348 Likes • 42 Comments"
    },
    {
        id: 2,
        author: "Noble Nexus",
        role: "Education Technology Company",
        date: "1 week ago",
        content: "New Case Study Published: How St. Mary's University increased student retention by 15% using Noble Nexus Predictive Analytics. Read the full report on our website. 📊",
        stats: "215 Likes • 18 Comments"
    },
    {
        id: 3,
        author: "Noble Nexus",
        role: "Education Technology Company",
        date: "2 weeks ago",
        content: "Our CEO speaking at the Future of Learning Summit 2026. 'AI isn't replacing teachers; it's giving them superpowers.' 🦸‍♂️🦸‍♀️",
        image: "https://images.unsplash.com/photo-1544531696-60c35eb8176e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        stats: "512 Likes • 89 Comments"
    }
];

const LinkedInFeed = () => {
    return (
        <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex items-center justify-between mb-6 sticky top-0 bg-[#F8FAFC]/95 backdrop-blur-md z-10 py-2 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#0077b5] flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </div>
                    <div>
                        <h3 className="text-[#111111] font-bold text-sm">Noble Nexus</h3>
                        <p className="text-[#555555] text-xs">2,400 followers</p>
                    </div>
                </div>
                <a href="https://www.linkedin.com/company/noblenexus-ie/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#0077b5] border border-[#0077b5]/30 px-3 py-1 rounded hover:bg-[#0077b5]/10  transition-colors">Follow</a>
            </div>

            <div className="space-y-4">
                {linkedInPosts.map((post) => (
                    <div key={post.id} className="bg-[#FFFFFF] rounded-xl border border-gray-200 p-4 hover:border-gray-300 transition-colors shadow-sm">
                        <div className="flex gap-3 mb-3">
                            <div className="w-10 h-10 rounded bg-gradient-to-br from-teal-500 to-emerald-600"></div>
                            <div>
                                <h4 className="text-[#111111] text-sm font-bold">{post.author}</h4>
                                <p className="text-[#555555] text-[10px]">{post.role}</p>
                                <p className="text-[#555555] text-[10px]">{post.date}</p>
                            </div>
                        </div>

                        <p className="text-[#333333] text-sm mb-3 leading-relaxed">
                            {post.content}
                        </p>

                        {post.image && (
                            <img src={post.image} alt="Update" className="w-full rounded-lg mb-3 border border-gray-200" />
                        )}

                        <div className="flex items-center gap-2 text-xs text-[#555555] pt-3 border-t border-gray-200">
                            <div className="flex -space-x-1">
                                <div className="w-4 h-4 rounded-full bg-blue-500 border border-[#FFFFFF]"></div>
                                <div className="w-4 h-4 rounded-full bg-green-500 border border-[#FFFFFF]"></div>
                                <div className="w-4 h-4 rounded-full bg-red-500 border border-[#FFFFFF]"></div>
                            </div>
                            <span>{post.stats}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 text-center">
                <a href="https://www.linkedin.com/company/noblenexus-ie/" target="_blank" className="text-xs text-[#555555] hover:text-[#111111] transition-colors font-medium">View all updates on LinkedIn →</a>
            </div>
        </div>
    );
};

export default LinkedInFeed;
