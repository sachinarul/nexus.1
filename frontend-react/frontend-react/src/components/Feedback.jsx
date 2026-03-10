
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');
        try {
            await addDoc(collection(db, 'feedback'), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                rating,
                createdAt: serverTimestamp()
            });
            setIsSubmitted(true);
        } catch (error) {
            console.error('Feedback submission error:', error);
            setSubmitError('Failed to submit feedback. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#FFFFFF] backdrop-blur-2xl border border-gray-200 rounded-3xl overflow-hidden shadow-xl relative"
                >
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50/50 to-[#FFFFFF]/0 pointer-events-none"></div>

                    {/* Content Container - Needs z-10 to sit above the absolute background */}
                    <div className="grid md:grid-cols-2 relative z-10">
                        {/* Left Side: Text & Info */}
                        <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-center">
                            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-[#0F766E] mb-6">
                                <MessageSquare size={28} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#111111] mb-4">
                                Your Feedback <br />
                                <span className="text-[#2563EB]">Matters to Us.</span>
                            </h2>
                            <p className="text-[#555555] leading-relaxed mb-8 font-medium">
                                Help us shape the future of education. Share your experience with Noble Nexus so we can continue to innovate and improve.
                            </p>

                            <div className="flex items-center gap-4 text-sm text-[#555555] font-bold">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-[#111111] font-bold">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span>Join 1000+ users sharing insights</span>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-10 md:p-12 bg-gray-50">
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-10"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#111111] mb-2">Thank You!</h3>
                                        <p className="text-[#555555] font-medium">Your feedback has been successfully sent.</p>
                                        <button
                                            onClick={() => { setIsSubmitted(false); setRating(0); setFormData({ name: '', email: '', message: '' }); setSubmitError(''); }}
                                            className="mt-8 text-[#0F766E] hover:text-[#2563EB] font-bold transition-colors"
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
                                            <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">Rate your experience</label>
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
                                                            className={`${(hoverRating || rating) >= star ? 'fill-amber-400 text-amber-400' : 'text-gray-300'} transition-colors duration-200`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#FFFFFF] border border-gray-200 rounded-lg px-4 py-3 text-[#111111] text-sm focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] outline-none transition-colors shadow-sm placeholder:text-gray-400"
                                                    placeholder="John"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#FFFFFF] border border-gray-200 rounded-lg px-4 py-3 text-[#111111] text-sm focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] outline-none transition-colors shadow-sm placeholder:text-gray-400"
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">Feedback</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                className="w-full bg-[#FFFFFF] border border-gray-200 rounded-lg px-4 py-3 text-[#111111] text-sm focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] outline-none transition-colors resize-none shadow-sm placeholder:text-gray-400"
                                                placeholder="Tell us what you think..."
                                                required
                                            ></textarea>
                                        </div>

                                        {submitError && (
                                            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 flex items-center gap-3 text-red-200 text-sm">
                                                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                {submitError}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#0F766E] hover:bg-teal-700 text-[#FFFFFF] font-bold py-3 rounded-lg shadow-md transition-all transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
