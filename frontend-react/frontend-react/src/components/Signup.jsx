import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, ArrowRight, AlertCircle, Loader2, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        institution: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup, googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(formData.email, formData.password, formData.fullName);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                setError('Email is already in use.');
            } else if (err.code === 'auth/weak-password') {
                setError('Password should be at least 6 characters.');
            } else {
                setError('Failed to create an account. Please try again.');
            }
        }
        setLoading(false);
    };

    const handleSocialSignup = async (provider) => {
        try {
            setError('');
            setLoading(true);
            await provider();
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/account-exists-with-different-credential') {
                setError('An account already exists with a different sign-in method.');
            } else if (err.code === 'auth/popup-closed-by-user') {
                setError('Sign-in popup was closed. Please try again.');
            } else {
                setError('Failed to sign up: ' + err.message);
            }
        }
        setLoading(false);
    };

    return (
        <section className="min-h-screen bg-[#F8FAFC] flex pt-28 pb-12 lg:pt-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 pointer-events-none"></div>
            <div className="absolute w-[800px] h-[800px] bg-teal-50 rounded-full blur-[120px] top-[-200px] right-[-200px] animate-pulse-slow"></div>
            <div className="absolute w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] bottom-[-100px] left-[-100px] animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto px-4 relative z-10 flex">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="m-auto w-full max-w-5xl bg-[#FFFFFF] backdrop-blur-2xl border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row"
                >
                    {/* Left Side - Visuals */}
                    <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-teal-50 to-blue-50 relative w-1/2">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-display font-bold text-[#111111] mb-6">Join the Future of Learning</h2>
                            <p className="text-[#555555] text-lg mb-8 leading-relaxed font-medium">
                                Create an account to access our comprehensive suite of educational tools, ERP solutions, and digital learning resources.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Access to Noble Nexus Dashboard",
                                    "Personalized Learning Resources",
                                    "Institution-wide Analytics",
                                    "24/7 Dedicated Support"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[#111111] font-medium">
                                        <div className="w-6 h-6 rounded-full bg-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12">
                        <div className="text-center mb-6 lg:text-left">
                            <h3 className="text-2xl font-bold text-[#111111] mb-2">Create your account</h3>
                            <p className="text-[#555555] font-medium text-sm">Start your journey with Noble Nexus today.</p>
                        </div>

                        {/* Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 mb-6 flex items-center gap-3 text-red-200 text-sm"
                                >
                                    <AlertCircle size={18} className="text-red-500 flex-shrink-0" />
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Social Sign Up Buttons */}
                        <div className="space-y-3 mb-6">
                            {/* Google */}
                            <button
                                type="button"
                                onClick={() => handleSocialSignup(googleLogin)}
                                disabled={loading}
                                className="w-full bg-[#F8FAFC] border border-gray-200 text-[#111111] font-bold py-3.5 rounded-lg hover:bg-gray-50 transition-all transform active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43 .35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Sign up with Google
                            </button>
                        </div>

                        <div className="relative flex items-center justify-center mb-6">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="px-4 text-xs text-[#555555] uppercase tracking-wider font-bold">Or continue with email</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <UserPlus size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-[#FFFFFF] border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-[#111111] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] outline-none transition-colors shadow-sm placeholder:text-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#FFFFFF] border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-[#111111] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] outline-none transition-colors shadow-sm placeholder:text-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <Lock size={18} />
                                        </div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full bg-[#FFFFFF] border border-gray-200 rounded-lg pl-10 pr-10 py-3 text-[#111111] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] outline-none transition-colors shadow-sm placeholder:text-gray-400"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#111111] transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">Confirm Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <Lock size={18} />
                                        </div>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full bg-[#FFFFFF] border border-gray-200 rounded-lg pl-10 pr-10 py-3 text-[#111111] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] outline-none transition-colors shadow-sm placeholder:text-gray-400"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#111111] transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#0F766E] hover:bg-teal-700 text-white font-bold py-3.5 rounded-lg shadow-md transition-all transform active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        Create Account
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-[#555555] font-medium">
                            Already have an account? <Link to="/login" className="text-[#0F766E] hover:text-[#2563EB] font-bold transition-colors">Log in</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Signup;
