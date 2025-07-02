/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: {
                    200: "#777777",
                    300: "#666666",
                    400: "#393939",
                    DEFAULT: '#1F1F1F',
                    600: '#181818'
                },
                primary: {
                    DEFAULT: "#5568FE",
                    600: "#424FB0",
                    700: "#2F3562",
                },
                error: {
                    DEFAULT: "#F17676E5",
                }
            }
        },
    },
    plugins: [],
}

