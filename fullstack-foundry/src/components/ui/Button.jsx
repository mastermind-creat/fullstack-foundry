import { forwardRef } from 'react';

const variants = {
    primary:
    "bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-600 active:bg-brand-700",
    outline:
    "border border-white/20 text-white hover:bg-white/10 active:bg-white/20",
    ghost:
    "text-white/70 hover:bg-white/10 hover:text-white",
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
};

const Button = forwardRef(
    (
        {
            children,
            variant = "primary",
            size = "md",
            className = "",
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-40 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
