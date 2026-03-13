
// Mock Social API Service

const mockPosts = [
    {
        id: 1,
        platform: 'instagram',
        content: "Thrilled to announce our partnership with Global EdTech Alliance! 🌍 #EdTech",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300&auto=format&fit=crop",
        likes: 1245,
        comments: 89,
        date: "2h ago",
        link: "https://www.instagram.com/nexus_noble"
    },
    {
        id: 2,
        platform: 'linkedin',
        content: "New Case Study: How University of Dublin scaled online exams with Noble Nexus.",
        image: null,
        likes: 456,
        comments: 32,
        date: "5h ago",
        link: "https://www.linkedin.com/company/noblenexus-ie/"
    },
    {
        id: 3,
        platform: 'facebook',
        content: "Join our live webinar tomorrow on AI in Education! 🎓 Register now.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=300&auto=format&fit=crop",
        likes: 89,
        comments: 12,
        shares: 45,
        date: "1d ago",
        link: "https://www.facebook.com/share/1QyeyH9suF/"
    },
    {
        id: 4,
        platform: 'instagram',
        content: "BTS: Our team working on the new AI grading feature! 🤖 #LifeAtNobleNexus",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=300&auto=format&fit=crop",
        likes: 2100,
        comments: 145,
        date: "1d ago",
        link: "https://www.instagram.com/nexus_noble"
    },
    {
        id: 5,
        platform: 'linkedin',
        content: "We're hiring! Looking for Senior React Developers to join our Dublin office. Apply today.",
        image: null,
        likes: 890,
        comments: 112,
        date: "2d ago",
        link: "https://www.linkedin.com/company/noblenexus-ie/"
    },
    {
        id: 6,
        platform: 'facebook',
        content: "See how Noble Nexus helped St. Mary's School go paperless in just 3 months. 📄➡️💻",
        image: "https://images.unsplash.com/photo-1427504746696-ea3093600556?q=80&w=300&auto=format&fit=crop",
        likes: 156,
        comments: 24,
        shares: 18,
        date: "3d ago",
        link: "https://www.facebook.com/share/1QyeyH9suF/"
    }
];

const mockAnalytics = {
    followers: {
        instagram: "12.5K",
        linkedin: "8.2K",
        facebook: "5.4K",
        total: "26.1K"
    },
    growth: "+15%",
    engagement: "8.4%",
    impressions: "1.2M"
};

export const fetchSocialData = async () => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ posts: mockPosts, analytics: mockAnalytics });
        }, 800);
    });
};
