import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Geist Sans", "sans-serif"],
			},
			colors: {
				base: {
					50: "#f7f7f7",
					100: "#ededed",
					200: "#dfdfdf",
					300: "#c8c8c8",
					400: "#b0b0b0",
					500: "#999999",
					600: "#888888",
					700: "#7b7b7b",
					800: "#676767",
					900: "#545454",
					950: "#363636",
				},
				mineshaft: {
					50: "#f6f6f6",
					100: "#e7e7e7",
					200: "#d1d1d1",
					300: "#b0b0b0",
					400: "#888888",
					500: "#6d6d6d",
					600: "#5d5d5d",
					700: "#4f4f4f",
					800: "#454545",
					900: "#3d3d3d",
					950: "#2b2b2b",
				},
				darkbg: "#000336",
			},
		},
	},
	plugins: [typography],
};
