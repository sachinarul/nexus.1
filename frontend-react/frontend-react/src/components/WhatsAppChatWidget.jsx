
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, MapPin, Building, Briefcase } from "lucide-react";
import PremiumSelect from "./ui/PremiumSelect";
import toast from 'react-hot-toast';

const cityOptions = [
    { value: "Dublin", label: "Dublin" },
    { value: "Cork", label: "Cork" },
    { value: "Galway", label: "Galway" },
    { value: "Limerick", label: "Limerick" },
    { value: "Waterford", label: "Waterford" },
    { value: "International", label: "International" }
];

const institutionOptions = [
    { value: "School (K-12)", label: "School (K-12)" },
    { value: "University / College", label: "University / College" },
    { value: "Corporate", label: "Corporate Learning" },
    { value: "Government", label: "Government / NGO" },
    { value: "Other", label: "Other" }
];

const serviceOptions = [
    { value: "Veda Platform", label: "Veda Platform" },
    { value: "ERP System", label: "ERP System" },
    { value: "AI Analytics", label: "AI & Analytics" },
    { value: "Request Demo", label: "Request a Demo" },
    { value: "Customer Support", label: "Customer Support" }
];

const WhatsAppChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [formData, setFormData] = useState({
        city: "",
        institutionType: "",
        service: "",
        message: ""
    });

    // Auto-hide/show on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true); // Show on scroll up
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleWhatsAppRedirect = (e) => {
        e.preventDefault();

        // Form Validation
        if (!formData.city || !formData.institutionType || !formData.service) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const phoneNumber = "353871700653";  // Replace with your actual support number
        const text = `Hello Noble Nexus, I'm from ${formData.city}. I represent a ${formData.institutionType} and I'm interested in ${formData.service}. ${formData.message ? `Message: ${formData.message}` : ""}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#111111] backdrop-blur-xl border border-[#333333] w-[360px] max-w-[90vw] rounded-2xl shadow-2xl overflow-visible ring-1 ring-white/5"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-5 relative overflow-hidden rounded-t-2xl">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <MessageCircle size={80} />
                            </div>
                            <div className="flex justify-between items-start relative z-10">
                                <div>
                                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                        Chat with Us <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                                    </h3>
                                    <p className="text-teal-50 text-xs mt-1 leading-relaxed max-w-[240px] font-medium">
                                        We're here to help you 24/7. Connect with Noble Nexus Support.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Form Body */}
                        <form onSubmit={handleWhatsAppRedirect} className="p-5 space-y-5">

                            <PremiumSelect
                                label="Your Location"
                                icon={MapPin}
                                options={cityOptions}
                                value={formData.city}
                                onChange={(val) => setFormData({ ...formData, city: val })}
                                placeholder="Select City"
                            />

                            <PremiumSelect
                                label="Institution Type"
                                icon={Building}
                                options={institutionOptions}
                                value={formData.institutionType}
                                onChange={(val) => setFormData({ ...formData, institutionType: val })}
                                placeholder="Select Type"
                            />

                            <PremiumSelect
                                label="Interested Service"
                                icon={Briefcase}
                                options={serviceOptions}
                                value={formData.service}
                                onChange={(val) => setFormData({ ...formData, service: val })}
                                placeholder="Select Service"
                            />

                            {/* Optional Message */}
                            <div className="space-y-2">
                                <label className="text-xs text-[#E5E7EB] font-semibold ml-1">Message (Optional)</label>
                                <textarea
                                    className="w-full bg-[#FFFFFF] backdrop-blur-md border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/50 min-h-[80px] resize-none font-medium custom-scrollbar transition-all hover:bg-gray-50 hover:border-[#0F766E]/50"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 group transform active:scale-[0.98] mt-2"
                            >
                                <MessageCircle size={20} className="fill-current" />
                                Start Chat on WhatsApp
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="text-center pt-2">
                                <p className="text-[10px] text-[#D1D5DB] font-medium">
                                    Powered by <span className="font-bold">Noble Nexus Support</span>
                                </p>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <AnimatePresence>
                {isVisible && !isOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="relative group p-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-green-600/50 transition-all z-50 flex items-center justify-center"
                    >
                        <MessageCircle size={32} className="fill-current" />

                        {/* Notification Badge */}
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-navy text-[8px] font-bold items-center justify-center text-white">1</span>
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WhatsAppChatWidget;
