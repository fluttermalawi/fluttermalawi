import type {Config} from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // transparent: 'transparent',
                // current: '',
                white: "#fffffA",
                sky: "#0264CA",
                blue: "#04428E",
                navy: "#032247",
            },
        },
    },
    plugins: [
        typography
    ],
} satisfies Config;
