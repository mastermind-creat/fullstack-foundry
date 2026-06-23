const Badge = ({ children, className = "" }) => {
    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/10 text-white/80 border border-white/10 ${className}`}
        >
            {children}
        </span>
    );
};

export default Badge;
