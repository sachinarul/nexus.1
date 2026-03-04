
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Mail, Calendar, Settings, Bell, Shield, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#111111] font-sans selection:bg-teal selection:text-white overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-teal-50 to-transparent pointer-events-none"></div>
            <div className="absolute -top-[100px] -right-[100px] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 py-8 relative z-10">
                {/* Header */}
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 sm:mb-12">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-blue-600 flex items-center justify-center text-white shadow-lg shadow-teal/20 shrink-0">
                            <span className="font-bold text-xl">{currentUser?.displayName?.charAt(0) || currentUser?.email?.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h1 className="text-xl sm:text-2xl font-bold font-display truncate text-[#111111]">Welcome Back, {currentUser?.displayName || 'User'}</h1>
                            <p className="text-[#555555] text-sm font-medium">Dashboard Overview</p>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="flex justify-center items-center gap-2 px-5 py-2.5 bg-[#FFFFFF] hover:bg-red-50 border border-gray-200 hover:border-red-200 rounded-xl text-[#555555] hover:text-red-500 transition-all group w-full sm:w-auto shadow-sm"
                    >
                        <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold">Sign Out</span>
                    </button>
                </header>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* User Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#FFFFFF] backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-xl font-bold text-[#111111] mb-6 flex items-center gap-2">
                                <User size={20} className="text-[#0F766E]" /> Profile Information
                            </h2>

                            <div className="space-y-6">
                                <div className="group">
                                    <label className="text-xs font-bold text-[#555555] uppercase tracking-wider mb-1 block">Full Name</label>
                                    <p className="text-base sm:text-lg text-[#111111] font-bold pl-3 border-l-2 border-teal-200 group-hover:border-teal-500 transition-colors truncate">
                                        {currentUser?.displayName || 'Not Set'}
                                    </p>
                                </div>
                                <div className="group">
                                    <label className="text-xs font-bold text-[#555555] uppercase tracking-wider mb-1 block">Email Address</label>
                                    <div className="flex items-center gap-3 pl-3 border-l-2 border-purple-200 group-hover:border-purple-500 transition-colors">
                                        <Mail size={16} className="text-[#555555] shrink-0" />
                                        <p className="text-base sm:text-lg text-[#111111] font-bold break-all">{currentUser?.email}</p>
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="text-xs font-bold text-[#555555] uppercase tracking-wider mb-1 block">Member Since</label>
                                    <div className="flex items-center gap-3 pl-3 border-l-2 border-blue-200 group-hover:border-blue-500 transition-colors">
                                        <Calendar size={16} className="text-[#555555] shrink-0" />
                                        <p className="text-base sm:text-lg text-[#111111] font-bold">
                                            {currentUser?.metadata?.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : 'N/A'}
                                        </p>
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="text-xs font-bold text-[#555555] uppercase tracking-wider mb-1 block">Account Type</label>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-gray-200 text-[#0F766E] text-xs font-bold uppercase tracking-wide mt-1">
                                        <Shield size={12} />
                                        {currentUser?.role || 'Standard'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats / Activity / Features */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {/* Quick Action 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-[#FFFFFF] border border-gray-200 rounded-3xl p-6 hover:bg-gray-50 transition-colors cursor-pointer group shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-[#111111] mb-2">Platform Activity</h3>
                            <p className="text-[#555555] font-medium text-sm">View your recent learning progress and course completions.</p>
                        </motion.div>

                        {/* Quick Action 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#FFFFFF] border border-gray-200 rounded-3xl p-6 hover:bg-gray-50 transition-colors cursor-pointer group shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                <Settings size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-[#111111] mb-2">Account Settings</h3>
                            <p className="text-[#555555] font-medium text-sm">Manage preferences, notifications, and security settings.</p>
                        </motion.div>

                        {/* Notifications Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-3xl p-8"
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <h3 className="text-lg font-bold text-[#111111] flex items-center gap-2">
                                    <Bell size={20} className="text-[#0F766E]" /> Recent Notifications
                                </h3>
                                <button className="text-xs text-[#0F766E] hover:text-[#2563EB] transition-colors uppercase font-bold tracking-wider self-end sm:self-auto">Mark all read</button>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { title: "Welcome to Noble Nexus", time: "Just now", type: "system" },
                                    { title: "Profile setup incomplete", time: "2 hours ago", type: "alert" },
                                    { title: "New course available: Digital Leadership", time: "1 day ago", type: "info" }
                                ].map((notif, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-2xl bg-[#FFFFFF] hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm">
                                        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                            <div className={`w-2 h-2 rounded-full shrink-0 ${notif.type === 'alert' ? 'bg-red-500' : notif.type === 'info' ? 'bg-[#2563EB]' : 'bg-[#0F766E]'}`}></div>
                                            <h4 className="text-sm font-bold text-[#111111] flex-1">{notif.title}</h4>
                                        </div>
                                        <p className="text-xs text-[#555555] font-bold sm:ml-auto pl-5 sm:pl-0">{notif.time}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
