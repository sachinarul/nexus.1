import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckCircle2, User, Mail, Phone, Clock, GraduationCap, ArrowRight, BookOpen, Calculator, Atom, FlaskConical, Dna, Code, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import toast from 'react-hot-toast';

const GeneralTutor = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        classGrade: '',
        subject: '',
        parentPhone: '',
        email: '',
        preferredTime: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await addDoc(collection(db, 'demo_bookings'), {
                ...formData,
                createdAt: serverTimestamp(),
                status: 'pending'
            });
            setIsSubmitted(true);
            toast.success('Demo class booked successfully!');
            setFormData({
                studentName: '',
                classGrade: '',
                subject: '',
                parentPhone: '',
                email: '',
                preferredTime: ''
            });
        } catch (error) {
            console.error('Error saving booking:', error);
            toast.error('Failed to book demo. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const subjects = [
        { 
            icon: Calculator, 
            title: "Mathematics", 
            desc: "Algebra, Geometry, Calculus, and beyond.",
            topics: ["Algebra & Geometry", "Calculus & Trigonometry", "Data Handling"],
            highlights: ["Live classes", "Practice exercises", "Expert tutors"],
            colors: {
                wrapperHoverBorder: "hover:border-blue-200",
                iconBg: "bg-blue-50",
                iconText: "text-blue-600",
                iconGroupHoverBg: "group-hover:bg-blue-600",
                titleGroupHoverText: "group-hover:text-blue-600",
                bulletBg: "bg-blue-500",
                btnBg: "bg-blue-50",
                btnText: "text-blue-600",
                btnHoverBg: "hover:bg-blue-600"
            }
        },
        { 
            icon: Atom, 
            title: "Physics", 
            desc: "Mechanics, Thermodynamics, and Quantum concepts.",
            topics: ["Kinematics & Mechanics", "Electromagnetism", "Thermodynamics"],
            highlights: ["Live classes", "Practice exercises", "Expert tutors"],
            colors: {
                wrapperHoverBorder: "hover:border-violet-200",
                iconBg: "bg-violet-50",
                iconText: "text-violet-600",
                iconGroupHoverBg: "group-hover:bg-violet-600",
                titleGroupHoverText: "group-hover:text-violet-600",
                bulletBg: "bg-violet-500",
                btnBg: "bg-violet-50",
                btnText: "text-violet-600",
                btnHoverBg: "hover:bg-violet-600"
            }
        },
        { 
            icon: FlaskConical, 
            title: "Chemistry", 
            desc: "Organic, Inorganic, and Physical Chemistry.",
            topics: ["Organic Chemistry", "Chemical Reactions", "Periodic Trends"],
            highlights: ["Live classes", "Practice exercises", "Expert tutors"],
            colors: {
                wrapperHoverBorder: "hover:border-emerald-200",
                iconBg: "bg-emerald-50",
                iconText: "text-emerald-600",
                iconGroupHoverBg: "group-hover:bg-emerald-600",
                titleGroupHoverText: "group-hover:text-emerald-600",
                bulletBg: "bg-emerald-500",
                btnBg: "bg-emerald-50",
                btnText: "text-emerald-600",
                btnHoverBg: "hover:bg-emerald-600"
            }
        },
        { 
            icon: Dna, 
            title: "Biology", 
            desc: "Botany, Zoology, Genetics, and Human Anatomy.",
            topics: ["Genetics & Evolution", "Human Anatomy", "Plant Physiology"],
            highlights: ["Live classes", "Practice exercises", "Expert tutors"],
            colors: {
                wrapperHoverBorder: "hover:border-rose-200",
                iconBg: "bg-rose-50",
                iconText: "text-rose-600",
                iconGroupHoverBg: "group-hover:bg-rose-600",
                titleGroupHoverText: "group-hover:text-rose-600",
                bulletBg: "bg-rose-500",
                btnBg: "bg-rose-50",
                btnText: "text-rose-600",
                btnHoverBg: "hover:bg-rose-600"
            }
        },
        { 
            icon: BookOpen, 
            title: "English", 
            desc: "Grammar, Literature, and Communication Skills.",
            topics: ["Advanced Grammar", "Literature Analysis", "Creative Writing"],
            highlights: ["Live classes", "Practice exercises", "Expert tutors"],
            colors: {
                wrapperHoverBorder: "hover:border-amber-200",
                iconBg: "bg-amber-50",
                iconText: "text-amber-600",
                iconGroupHoverBg: "group-hover:bg-amber-600",
                titleGroupHoverText: "group-hover:text-amber-600",
                bulletBg: "bg-amber-500",
                btnBg: "bg-amber-50",
                btnText: "text-amber-600",
                btnHoverBg: "hover:bg-amber-600"
            }
        },
        { 
            icon: Code, 
            title: "Computer Science", 
            desc: "Coding, Logic, Algorithms, and Software.",
            topics: ["Programming Basics", "Data Structures", "Algorithm Design"],
            highlights: ["Live classes", "Practice exercises", "Expert tutors"],
            colors: {
                wrapperHoverBorder: "hover:border-cyan-200",
                iconBg: "bg-cyan-50",
                iconText: "text-cyan-600",
                iconGroupHoverBg: "group-hover:bg-cyan-600",
                titleGroupHoverText: "group-hover:text-cyan-600",
                bulletBg: "bg-cyan-500",
                btnBg: "bg-cyan-50",
                btnText: "text-cyan-600",
                btnHoverBg: "hover:bg-cyan-600"
            }
        }
    ];

    const handleStartLearning = (subjectTitle) => {
        setFormData(prev => ({ ...prev, subject: subjectTitle }));
        document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    const classes = [
        "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6",
        "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"
    ];

    const subjectOptions = [
        "Mathematics", "Physics", "Chemistry", "Biology", "English", "Computer Science"
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
                            Noble Nexus General Tutor <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-blue-600 block mt-2 text-3xl md:text-4xl">Smart Online Learning</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#444444] max-w-3xl mx-auto leading-relaxed mt-6">
                            Noble Nexus General Tutor provides high-quality online tutoring across multiple subjects. Our platform connects students with expert tutors for personalized learning, interactive sessions, and concept-based teaching.
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

                {/* Subjects Section */}
                <div className="relative">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#111111]">Subjects We Teach</h2>
                        <div className="w-24 h-1 bg-[#0F766E] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjects.map((subject, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`bg-[#FFFFFF] p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl ${subject.colors.wrapperHoverBorder} transition-all duration-300 group flex flex-col h-full`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-16 h-16 ${subject.colors.iconBg} rounded-2xl flex items-center justify-center ${subject.colors.iconText} ${subject.colors.iconGroupHoverBg} group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm`}>
                                        <subject.icon size={32} />
                                    </div>
                                    <h4 className={`font-bold text-2xl text-[#111111] ${subject.colors.titleGroupHoverText} transition-colors`}>{subject.title}</h4>
                                </div>
                                
                                <p className="text-[#555555] text-sm mb-6 pb-6 border-b border-gray-100 leading-relaxed">{subject.desc}</p>
                                
                                <div className="mb-6 flex-1">
                                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Topics</h5>
                                    <ul className="space-y-3">
                                        {subject.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-[#333333] font-medium">
                                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${subject.colors.bulletBg} flex-shrink-0`}></div>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Highlights</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {subject.highlights.map((highlight, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-gray-50 text-[#555555] text-[11px] font-bold uppercase tracking-wider rounded-lg border border-gray-200">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button 
                                    onClick={() => handleStartLearning(subject.title)}
                                    className={`w-full mt-auto py-4 rounded-xl flex items-center justify-center gap-2 font-bold ${subject.colors.btnBg} ${subject.colors.btnText} border border-transparent ${subject.colors.btnHoverBg} hover:text-white transition-all duration-300 group/btn`}
                                >
                                    Start Learning
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
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
                                Experience our interactive learning environment firsthand. Sign up today and let your child discover the joy of learning!
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
                                    Our team will contact you shortly to schedule your demo class.
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-300">Select Your Class</label>
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
                                                <option value="" disabled className="text-gray-500">Select Your Class</option>
                                                {classes.map(cls => (
                                                    <option key={cls} value={cls} className="text-[#111111]">{cls}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-300">Select Subject</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                                <BookOpen size={18} />
                                            </div>
                                            <select
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-10 py-3 bg-transparent border border-gray-700 text-[#ffffff] rounded-xl focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] outline-none transition-all appearance-none [&>option]:text-[#111111]"
                                            >
                                                <option value="" disabled className="text-gray-500">Select Subject</option>
                                                {subjectOptions.map(sub => (
                                                    <option key={sub} value={sub} className="text-[#111111]">{sub}</option>
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
                                    disabled={isLoading}
                                    className="w-full py-4 bg-[#0F766E] hover:bg-teal-600 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 group mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Booking...
                                        </>
                                    ) : (
                                        <>
                                            Book Free Demo
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GeneralTutor;
