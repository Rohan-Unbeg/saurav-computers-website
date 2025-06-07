/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    // Enable JIT for faster builds and smaller CSS
    mode: "jit",
    // Only include necessary files for content scanning
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}", "./public/**/*.html"],
    // Safelist any dynamic classes that can't be detected
    safelist: [
        "bg-primary-500",
        "text-primary-500",
        "border-primary-500",
        "hover:bg-primary-600",
        "focus:ring-primary-500",
    ],
    // Disable core plugins we don't need
    corePlugins: {
        // Enable only the core plugins we need
        float: false,
        clear: false,
        skew: false,
        // Add more plugins to disable if not needed
    },
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "var(--color-primary-50)",
                    100: "var(--color-primary-100)",
                    300: "var(--color-primary-300)",
                    500: "var(--color-primary-500)",
                    600: "var(--color-primary-600)",
                    700: "var(--color-primary-700)",
                },
                accent: {
                    50: "var(--color-accent-50)",
                    100: "var(--color-accent-100)",
                    300: "var(--color-accent-300)",
                    500: "var(--color-accent-500)",
                    600: "var(--color-accent-600)",
                    700: "var(--color-accent-700)",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            transitionDuration: {
                DEFAULT: "300ms",
            },
            transitionTimingFunction: {
                DEFAULT: "ease-in-out",
            },
            // Optimize for modern browsers with CSS features
            screens: {
                "2xl": "1536px",
                xl: "1280px",
                lg: "1024px",
                md: "768px",
                sm: "640px",
            },
        },
    },
    // Only include the variants we actually use
    variants: {
        extend: {
            opacity: ["disabled", "group-hover"],
            backgroundColor: ["active", "hover", "focus", "group-hover"],
            textColor: ["active", "hover", "focus", "group-hover"],
            borderColor: ["active", "hover", "focus", "group-hover"],
            ringColor: ["hover", "focus"],
            ringOffsetColor: ["hover", "focus"],
            ringOffsetWidth: ["hover", "focus"],
            ringOpacity: ["hover", "focus"],
            ringWidth: ["hover", "focus"],
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "class", // Only generate classes for form elements we use
        }),
    ],
    // Remove unused styles in production
    ...(process.env.NODE_ENV === "production" && {
        content: [
            "./src/**/*.{astro,html,js,jsx,ts,tsx}",
            "./public/**/*.html",
        ],
    }),
};
