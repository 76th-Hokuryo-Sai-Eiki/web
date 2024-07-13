import { nextui } from "@nextui-org/theme";
import { color } from "framer-motion";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
