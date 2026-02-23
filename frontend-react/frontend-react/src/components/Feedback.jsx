
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, CheckCircle2, MessageSquare } from 'lucide-react';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    rating
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('Feedback submission failed');
            }
        } catch (error) {
            console.error(error);
            alert('Error submitting feedback');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-navy-900/50 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                    <div className="grid md:grid-cols-2">
                        {/* Left Side: Text & Info */}
                        <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
                            <div className="w-14 h-14 bg-teal/20 rounded-xl flex items-center justify-center text-teal mb-6">
                                <MessageSquare size={28} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                Your Feedback <br />
                                <span className="bg-gradient-to-r from-teal to-purple-400 bg-clip-text text-transparent">Matters to Us.</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Help us shape the future of education. Share your experience with Noble Nexus so we can continue to innovate and improve.
                            </p>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-navy-800 border-2 border-navy-900 flex items-center justify-center text-xs text-white">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span>Join 1000+ users sharing insights</span>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-10 md:p-12 bg-navy-900/30">
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-10"
                                    >
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                        <p className="text-gray-400">Your feedback has been successfully sent.</p>
                                        <button
                                            onClick={() => { setIsSubmitted(false); setRating(0); setFormData({ name: '', email: '', message: '' }); }}
                                            className="mt-8 text-teal hover:text-white font-medium transition-colors"
                                        >
                                            Send another response
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Rate your experience</label>
                                            <div className="flex gap-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onMouseEnter={() => setHoverRating(star)}
                                                        onMouseLeave={() => setHoverRating(0)}
                                                        onClick={() => setRating(star)}
                                                        className="focus:outline-none transition-transform hover:scale-110"
                                                    >
                                                        <Star
                                                            size={28}
                                                            className={`${(hoverRating || rating) >= star ? 'fill-amber-400 text-amber-400' : 'text-gray-600'} transition-colors duration-200`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                                                    placeholder="John"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Feedback</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-none"
                                                placeholder="Tell us what you think..."
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-teal to-blue-600 hover:from-teal/90 hover:to-blue-600/90 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-teal/20 transition-all transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            ) : (
                                                <>
                                                    Submit Feedback <Send size={16} />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Feedback;
