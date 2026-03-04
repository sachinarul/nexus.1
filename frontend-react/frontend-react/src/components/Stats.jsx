import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const useCountUp = (end, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration * 60);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [end, duration]);

    return { count };
};

const CountUp = ({ end, duration }) => {
    const { count } = useCountUp(end, duration);
    return <>{count}</>;
};

const Stats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const stats = [
        { value: 50, suffix: "M+", label: "In Funding" },
        { value: 100, suffix: "K+", label: "Active Learners" },
        { value: 98, suffix: "%", label: "Satisfaction Rate" },
        { value: 24, suffix: "/7", label: "AI Support" }
    ];

    return (
        <section ref={ref} className="py-20 bg-[#F8FAFC] border-y border-gray-200 relative z-10">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-center">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="p-6 rounded-2xl bg-[#FFFFFF] border border-gray-200 hover:border-teal-300 transition-all hover:-translate-y-2 shadow-sm"
                    >
                        <div className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-2">
                            <span className="text-[#0F766E]">
                                {isInView ? <CountUp end={stat.value} duration={2} /> : 0}
                            </span>
                            {stat.suffix}
                        </div>
                        <p className="text-[#555555] font-bold tracking-widest text-xs uppercase mt-2">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
