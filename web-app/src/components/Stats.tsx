import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const useCountUp = (end: number, duration: number) => {
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

const CountUp = ({ end, duration }: { end: number, duration: number }) => {
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
        <section ref={ref} className="py-20 bg-gradient-to-br from-navy to-black border-y border-white/5 relative z-10">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-center">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-teal/20 transition-all hover:-translate-y-2"
                    >
                        <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal to-purple">
                                {isInView ? <CountUp end={stat.value} duration={2} /> : 0}
                            </span>
                            {stat.suffix}
                        </div>
                        <p className="text-gray-400 font-medium tracking-widest text-xs uppercase mt-2">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
