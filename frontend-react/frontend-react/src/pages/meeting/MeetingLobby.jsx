import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Keyboard, ArrowRight, Copy, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const MeetingLobby = () => {
    const [roomCode, setRoomCode] = useState('');
    const [createdRoom, setCreatedRoom] = useState(null);
    const navigate = useNavigate();

    const generateRoomId = () => {
        const p1 = Math.floor(1000 + Math.random() * 9000);
        const p2 = Math.floor(1000 + Math.random() * 9000);
        return `nn-${p1}-${p2}`;
    };

    const handleCreateMeeting = () => {
        const newRoom = generateRoomId();
        setCreatedRoom(newRoom);
    };

    const handleStartCreatedMeeting = () => {
        if (createdRoom) {
            navigate(`/meet/${createdRoom}`);
        }
    };

    const copyLinkToClipboard = () => {
        navigator.clipboard.writeText(`${window.location.origin}/meet/${createdRoom}`);
        toast.success("Meeting link copied!");
    };

    const handleJoinMeeting = (e) => {
        e.preventDefault();
        let code = roomCode.trim();

        // Extract from full URL if pasted
        if (code.includes('/meet/')) {
            code = code.split('/meet/')[1];
        }

        // Remove query params if any
        code = code.split('?')[0];

        // Sanitize code
        code = code.replace(/[^a-zA-Z0-9-]/g, '');

        if (!code) {
            toast.error("Please enter a valid meeting code or link.");
            return;
        }

        if (!code.startsWith('nn-') || code.length < 10) {
            toast.error("Invalid meeting link or meeting has ended.");
            return;
        }

        navigate(`/meet/${code}`);
    };

    return (
        <section className="min-h-[85vh] bg-[#F8FAFC] flex items-center justify-center relative overflow-hidden py-20 mt-20">
            {/* Modal for Generated Link */}
            <AnimatePresence>
                {createdRoom && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setCreatedRoom(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#FFFFFF] rounded-2xl shadow-2xl w-full max-w-md p-6 relative z-10 border border-gray-200"
                        >
                            <button
                                onClick={() => setCreatedRoom(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-xl font-bold text-[#111111] mb-2">Here's your meeting link</h3>
                            <p className="text-[#555555] text-sm mb-6 font-medium">
                                Copy this link and send it to people you want to meet with. Be sure to save it so you can use it later, too.
                            </p>

                            <div className="bg-gray-50 flex flex-col gap-3 p-3 rounded-xl border border-gray-200 mb-6 group">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-[#111111] font-medium text-sm truncate max-w-[280px] bg-transparent outline-none">
                                        {window.location.origin}/meet/{createdRoom}
                                    </span>
                                    <button
                                        onClick={copyLinkToClipboard}
                                        className="p-2 bg-white hover:bg-teal-50 hover:text-[#0F766E] border border-gray-200 rounded-lg text-gray-600 transition-colors shadow-sm shrink-0 active:scale-95"
                                        title="Copy Link"
                                    >
                                        <Copy size={16} />
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleStartCreatedMeeting}
                                className="w-full py-3 bg-[#0F766E] hover:bg-teal-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-95"
                            >
                                <Video size={18} />
                                Join Meeting Now
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 pointer-events-none"></div>
            <div className="absolute w-[800px] h-[800px] bg-teal-50 rounded-full blur-[120px] top-[-200px] right-[-200px] animate-pulse-slow"></div>
            <div className="absolute w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] bottom-[-100px] left-[-100px] animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Left: Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-[#111111] leading-tight mb-6">
                            Welcome to <br />
                            <span className="text-[#0F766E]">Noble Nexus Meeting</span>
                        </h1>
                        <p className="text-lg text-[#555555] font-medium leading-relaxed mb-10">
                            Experience high-quality, seamless video conferencing. Instantly create or join meeting rooms, invite colleagues via a simple link, and collaborate efficiently in our secure and reliable virtual environment.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button
                                onClick={handleCreateMeeting}
                                className="w-full sm:w-auto px-6 py-3.5 bg-[#0F766E] hover:bg-teal-700 text-[#FFFFFF] font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-95 group"
                            >
                                <Video size={20} />
                                New Meeting
                            </button>

                            <form onSubmit={handleJoinMeeting} className="w-full sm:w-auto flex items-center relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-[#0F766E] transition-colors">
                                    <Keyboard size={20} />
                                </div>
                                <input
                                    type="text"
                                    value={roomCode}
                                    onChange={(e) => setRoomCode(e.target.value)}
                                    placeholder="Enter a code or link"
                                    className="w-full bg-[#FFFFFF] border border-gray-300 rounded-xl py-3.5 pl-10 pr-20 text-[#111111] placeholder-[#9CA3AF] font-medium focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-all shadow-sm"
                                />
                                {roomCode.trim() && (
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gray-100 hover:bg-gray-200 text-[#111111] font-bold rounded-lg transition-colors text-sm"
                                    >
                                        Join
                                    </button>
                                )}
                            </form>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <p className="text-sm text-[#555555]">
                                <span className="font-bold text-[#111111]">Learn more</span> about Noble Nexus secure meetings <ArrowRight size={14} className="inline ml-1" />
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="bg-[#FFFFFF] p-4 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" alt="Video Conference" className="rounded-2xl w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                            <div className="absolute bottom-8 left-8 text-[#FFFFFF] pointer-events-none z-10">
                                <h3 className="text-xl font-bold mb-1">Seamless Connectivity</h3>
                                <p className="text-sm font-medium text-gray-200">Start instant meetings and share ideas globally.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MeetingLobby;
