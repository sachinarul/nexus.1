import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AlertCircle, Loader2, Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, googleLogin, resetPassword } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
                setError('Invalid email or password.');
            } else if (err.code === 'auth/too-many-requests') {
                setError('Too many failed attempts. Please try again later.');
            } else {
                setError('Failed to log in. Please check your connection.');
            }
        }
        setLoading(false);
    };

    const handleSocialLogin = async (provider) => {
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
                setError('Failed to sign in: ' + err.message);
            }
        }
        setLoading(false);
    };

    const handleResetPassword = async () => {
        if (!email) return setError('Please enter your email address to reset password.');
        try {
            setError('');
            setLoading(true);
            await resetPassword(email);
            alert('Password reset email sent! Check your inbox.');
        } catch (err) {
            setError('Failed to send reset email. ' + err.message);
        }
        setLoading(false);
    };

    return (
        <section className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-black to-navy-900 pointer-events-none"></div>
            <div className="absolute w-[500px] h-[500px] bg-teal/10 rounded-full blur-[120px] top-[-100px] right-[-100px]"></div>
            <div className="absolute w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px] bottom-[-100px] left-[-100px]"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
            >
                <div className="text-center mb-10">
                    <div className="inline-block p-4 rounded-full bg-white/5 mb-4 border border-white/10">
                        <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <h2 className="text-3xl font-bold font-display text-white mb-2">Welcome Back</h2>
                    <p className="text-gray-400 text-sm">Sign in to your Nexus Dashboard</p>
                </div>

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

                {/* Social Login Buttons */}
                <div className="space-y-3 mb-6">
                    {/* Google */}
                    <button
                        type="button"
                        onClick={() => handleSocialLogin(googleLogin)}
                        disabled={loading}
                        className="w-full bg-white text-gray-900 font-bold py-3.5 rounded-lg shadow-lg hover:bg-gray-100 transition-all transform active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43 .35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>
                </div>

                <div className="relative flex items-center justify-center mb-6">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="px-4 text-xs text-gray-500 uppercase tracking-wider font-semibold">Or login with email</span>
                    <div className="flex-grow border-t border-white/10"></div>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                            placeholder="name@institution.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider">Password</label>
                            <button type="button" onClick={handleResetPassword} className="text-xs text-teal hover:text-white transition-colors">Forgot Password?</button>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 pr-12 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-colors"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-teal to-purple hover:from-teal/90 hover:to-purple/90 text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : 'Secure Login'}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-400">
                    Don't have an account? <Link to="/signup" className="text-white hover:text-teal font-medium transition-colors">Request Access</Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Login;
