import { useParams, useNavigate } from 'react-router-dom';
import { JitsiMeeting } from '@jitsi/react-sdk';
import { ArrowLeft, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

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

            {/* Jitsi Wrapper */}
            <div className="flex-1 w-full relative bg-[#000000]">
                <JitsiMeeting
                    domain="meet.jit.si"
                    roomName={`NobleNexus-${roomName}`}
                    configOverwrite={{
                        startWithAudioMuted: false,
                        startWithVideoMuted: false,
                        requireDisplayName: false,
                        disableModeratorIndicator: true,
                        enableEmailInStats: false,
                        prejoinPageEnabled: true,
                        resolution: 720,
                        constraints: {
                            video: {
                                height: {
                                    ideal: 720,
                                    max: 720,
                                    min: 240
                                }
                            }
                        }
                    }}
                    interfaceConfigOverwrite={{
                        DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
                        SHOW_BRAND_WATERMARK: false,
                        SHOW_JITSI_WATERMARK: false,
                        SHOW_PROMOTIONAL_CLOSE_PAGE: false
                    }}
                    userInfo={{
                        displayName: 'Participant'
                    }}
                    spinner={
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#111111]">
                            <Loader2 size={40} className="text-[#0F766E] animate-spin mb-4" />
                            <p className="text-[#E5E7EB] font-medium">Securing Meeting Room...</p>
                        </div>
                    }
                    onApiReady={(externalApi) => {
                        externalApi.addListener('cameraError', () => {
                            toast.error(
                                "Camera permission denied. Please enable it in your browser settings to be seen.",
                                { duration: 6000 }
                            );
                        });
                        externalApi.addListener('micError', () => {
                            toast.error(
                                "Microphone permission denied. Please enable it in your browser settings to speak.",
                                { duration: 6000 }
                            );
                        });
                    }}
                    getIFrameRef={(iframeRef) => {
                        iframeRef.style.height = '100%';
                        iframeRef.style.width = '100%';
                        iframeRef.style.border = 'none';
                    }}
                />
            </div>
        </div>
    );
};

export default MeetingRoom;
