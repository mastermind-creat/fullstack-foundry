const SectionHeading = ({ eyebrow, title, description, align = "left"}) => {
    const alignClass = {
        left: "text-left",
        center: "text-center mx-auto",
    }[align];

    return (
        <div className={`max-w-2xl mb-12 ${alignClass}`}>
            {eyebrow && (
                <p className="text-brand-500 text-sm font-medium tracking-[0.32em] uppercase mb-3">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-slate-300 text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
