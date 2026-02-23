
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

const PremiumSelect = ({ label, options, value, onChange, placeholder, icon: Icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className="relative space-y-2" ref={containerRef}>
            {label && (
                <label className="text-xs text-gray-300 font-semibold flex items-center gap-1.5 ml-1 select-none">
                    {Icon && <Icon size={12} className="text-teal" />} {label}
                </label>
            )}

            <button
                type="button"
                className={`w-full relative flex items-center justify-between bg-navy-800/50 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3.5 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/50 hover:border-teal/30 hover:bg-navy-800/80 ${isOpen ? 'ring-2 ring-teal/50 border-teal shadow-[0_0_15px_rgba(20,184,166,0.3)]' : ''}`}
                onClick={toggleOpen}
            >
                <span className={`block truncate ${!selectedOption ? 'text-gray-400 italic text-sm' : 'text-white font-medium text-sm'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <ChevronDown size={16} className={`text-teal transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-[100] mt-2 w-full max-h-60 overflow-auto rounded-xl bg-[#0F172A] border border-teal/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/5 backdrop-blur-xl custom-scrollbar"
                    >
                        <div className="p-1.5 space-y-1">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option)}
                                    className={`relative w-full cursor-pointer select-none py-2.5 pl-3 pr-9 text-left rounded-lg text-sm transition-all duration-200 group flex items-center
                                        ${value === option.value
                                            ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold shadow-lg shadow-teal/20'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-white hover:scale-[1.02]'
                                        }`}
                                >
                                    <span className="block truncate">{option.label}</span>

                                    {value === option.value && (
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                                            <Check size={14} className="drop-shadow-md" aria-hidden="true" />
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PremiumSelect;
