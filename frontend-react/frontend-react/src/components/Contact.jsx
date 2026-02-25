import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        institution: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'contact'), {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                institution: formData.institution,
                message: formData.message,
                createdAt: serverTimestamp()
            });

            toast.success('Message sent successfully!');
            setFormData({ firstName: '', lastName: '', email: '', institution: '', message: '' });
        } catch (error) {
            console.error('Contact submission error:', error);
            toast.error('Error sending message. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-navy to-black relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Get Started</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                            Join the <br />
                            <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Education Revolution.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            Ready to transform your institution? Schedule a demo or get in touch with our team of education architects today.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-teal">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email Us</h4>
                                    <p className="text-gray-400">hello@noblenexus.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-teal">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Global HQ</h4>
                                    <p className="text-gray-400">Dublin, Ireland</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm font-medium mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-medium mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">Institution / Organization</label>
                                <input
                                    type="text"
                                    name="institution"
                                    value={formData.institution}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                                    placeholder="University Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-teal to-purple hover:from-teal/90 hover:to-purple/90 text-white font-bold py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
