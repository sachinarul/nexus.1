import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MeetingRoom = () => {
    const { roomName } = useParams();
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 z-[99999] w-full h-full bg-[#111111] flex flex-col overflow-hidden">
            {/* Minimal Header over full screen */}
            <div className="h-14 bg-[#111111] border-b border-[#333333] flex items-center justify-between px-4 sm:px-6 shrink-0 relative z-10 w-full">
                <div className="flex items-center gap-3 sm:gap-4">
                    <button
                        onClick={() => navigate('/meet')}
                        className="p-2 bg-[#222222] hover:bg-[#333333] rounded-lg text-[#E5E7EB] transition-colors flex items-center justify-center group"
                        title="Leave Room"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div className="h-6 w-px bg-[#333333]"></div>
                    <span className="text-[#E5E7EB] font-bold text-sm tracking-wide flex items-center flex-wrap">
                        Noble Nexus <span className="hidden sm:inline">&nbsp;Meet&nbsp;</span> <span className="text-[#0F766E] mx-1 sm:mx-2">|</span> <span className="text-[#9CA3AF] font-medium font-mono text-xs sm:text-sm">{roomName}</span>
                    </span>
                </div>

                <div className="flex items-center">
                    <div className="hidden sm:flex px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-xs font-bold items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        Encrypted connection
                    </div>
                </div>
            </div>

            {/* Robust IFrame Wrapper */}
            <div className="flex-1 w-full relative bg-[#000000]">
                <iframe
                    src={`https://meet.jit.si/NobleNexus-${roomName}#config.prejoinPageEnabled=true&config.disableModeratorIndicator=true`}
                    allow="camera; microphone; fullscreen; display-capture; autoplay"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Noble Nexus Meeting"
                ></iframe>
            </div>
        </div>
    );
};

export default MeetingRoom;
