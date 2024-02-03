/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            colors: {
                trinidad: {
                    DEFAULT: "#EF5107",
                    50: "#FDC9B1",
                    100: "#FCBB9D",
                    200: "#FBA075",
                    300: "#FA854E",
                    400: "#F96926",
                    500: "#EF5107",
                    600: "#B83F05",
                    700: "#822C04",
                    800: "#4B1A02",
                    900: "#150701",
                    950: "#000000",
                },
                temptress: {
                    DEFAULT: "#380001",
                    50: "#FF6B6E",
                    100: "#FF575A",
                    200: "#FF2E32",
                    300: "#FF0509",
                    400: "#DB0004",
                    500: "#B20003",
                    600: "#8A0002",
                    700: "#610002",
                    800: "#380001",
                    900: "#000000",
                    950: "#000000",
                },
            },
        },
    },
    plugins: [],
};
