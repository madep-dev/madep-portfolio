/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#2563eb",
                secondary: "#64748b",
                dark: "#1e293b",
            },
            screens: {
                "2xl": "1320px",
            },
            backgroundSize: {
                "size-200": "200% 200%",
            },
            backgroundPosition: {
                "pos-0": "0% 0%",
                "pos-100": "100% 100%",
            },
        },
    },
    plugins: [],
};
