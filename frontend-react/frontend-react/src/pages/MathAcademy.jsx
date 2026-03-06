import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Mail, Phone, Clock, GraduationCap, ArrowRight, PlayCircle, BookOpen, Users, HelpCircle, FileText, Activity } from 'lucide-react';

const MathAcademy = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        classGrade: '',
        parentPhone: '',
        email: '',
        preferredTime: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        setIsSubmitted(true);
    };

    const features = [
        { icon: User, title: "Expert mathematics tutors" },
        { icon: PlayCircle, title: "Live interactive online classes" },
        { icon: Users, title: "Small batch teaching" },
        { icon: BookOpen, title: "Step-by-step concept explanation" },
        { icon: FileText, title: "Practice worksheets and assessments" },
        { icon: HelpCircle, title: "Doubt clearing sessions" },
        { icon: Activity, title: "Parent progress reports" }
    ];

    const classes = [
        "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
        "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"
    ];

    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="bg-[#FFFFFF] border-b border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-60"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 tracking-tight">
                            Noble Nexus Math Academy <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-blue-600 block mt-2 text-3xl md:text-4xl">Online Tuition for Classes 1 to 10</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#444444] max-w-3xl mx-auto leading-relaxed mt-6">
                            Noble Nexus Math Academy provides high-quality online mathematics tuition for students from 1st standard to 10th standard. Our goal is to make mathematics simple, engaging, and easy to understand through expert teachers and interactive learning.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#demo-section" className="px-8 py-4 bg-[#0F766E] hover:bg-teal-700 text-white font-bold rounded-full shadow-lg transition-transform active:scale-95 flex items-center gap-2 group">
                                Start Learning Today
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">

                {/* Features Section */}
                <div className="relative">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#111111]">Why Choose Noble Nexus Math Academy?</h2>
                        <div className="w-24 h-1 bg-[#0F766E] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#FFFFFF] p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex items-start gap-4"
                            >
                                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#0F766E] flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <feature.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#111111] leading-tight">{feature.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Classes Covered */}
                <div className="bg-[#FFFFFF] rounded-3xl p-10 md:p-16 shadow-sm border border-gray-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#111111]">Classes We Cover</h2>
                        <div className="w-24 h-1 bg-[#0F766E] mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {classes.map((cls, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="px-6 py-3 bg-gray-50 text-[#111111] font-bold rounded-full border border-gray-200 hover:border-[#0F766E] hover:text-[#0F766E] transition-colors cursor-default"
                            >
                                {cls}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Demo Class Section */}
                <div id="demo-section" className="bg-[#FFFFFF] rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="lg:w-5/12 bg-[#0F766E] p-10 md:p-14 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book a Free Demo Class</h2>
                            <p className="text-teal-50 mb-8 max-w-sm text-lg">
                                Experience our interactive learning environment firsthand. Sign up today and let your child discover the joy of mathematics!
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-teal-200" />
                                    <span>Personalized attention</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-teal-200" />
                                    <span>Interactive learning methods</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-teal-200" />
                                    <span>Expert guidance setup</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-7/12 p-10 md:p-14 relative z-10 bg-[#050505] rounded-r-3xl">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                            >
                                <div className="w-20 h-20 bg-teal-900/30 rounded-full flex items-center justify-center text-[#0F766E]">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#ffffff]">Thank you!</h3>
                                <p className="text-lg text-gray-300">
                                    Our team will contact you to schedule your free demo class.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-4 px-6 py-2 border-2 border-[#0F766E] text-[#0F766E] font-bold rounded-full hover:bg-teal-900/20 transition-colors"
                                >
                                    Book Another Demo
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-300">Student Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                                <User size={18} />
                                            </div>
                                            <input
                                                type="text"
                                                name="studentName"
                                                required
                                                value={formData.studentName}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-700 text-[#ffffff] rounded-xl focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all placeholder:text-gray-600"
                                                placeholder="Enter student's name"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-300">Class/Grade</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                                <GraduationCap size={18} />
                                            </div>
                                            <select
                                                name="classGrade"
                                                required
                                                value={formData.classGrade}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-10 py-3 bg-transparent border border-gray-700 text-[#ffffff] rounded-xl focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all appearance-none [&>option]:text-[#111111]"
                                            >
                                                <option value="" disabled className="text-gray-500">Select Class</option>
                                                {classes.map(cls => (
                                                    <option key={cls} value={cls} className="text-[#111111]">{cls}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-300">Parent Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                                <Phone size={18} />
                                            </div>
                                            <input
                                                type="tel"
                                                name="parentPhone"
                                                required
                                                value={formData.parentPhone}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-700 text-[#ffffff] rounded-xl focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all placeholder:text-gray-600"
                                                placeholder="Enter phone number"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-300">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                                <Mail size={18} />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-700 text-[#ffffff] rounded-xl focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all placeholder:text-gray-600"
                                                placeholder="Enter email address"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-300">Preferred Time for Demo</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                            <Clock size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            name="preferredTime"
                                            required
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-700 text-[#ffffff] rounded-xl focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all placeholder:text-gray-600"
                                            placeholder="e.g. Weekdays Evening, Weekend Morning"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#0F766E] hover:bg-teal-600 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 group mt-6"
                                >
                                    Submit
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MathAcademy;
