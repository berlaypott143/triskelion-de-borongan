import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";

// Color tokens
// Color tokens with updated colors
export const tokens = (mode) => ({
	...(mode === "dark"
		? {
				// dark colors for dark mode
				primary: {
					100: "#dce1e9", // Light blue-gray
					200: "#b9c3d2",
					300: "#97a6bb",
					400: "#7488a4",
					500: "#516b8d", // Main primary color (deep blue-gray)
					600: "#415570",
					700: "#313f54",
					800: "#202a37",
					900: "#10151b", // Darkest shade for background
				},
				accent: {
					100: "#a6f7ed", // Light cyan
					200: "#6df0e0",
					300: "#33e9d3",
					400: "#00e1c6", // Main accent (bright cyan)
					500: "#00b19f",
					600: "#00897a",
					700: "#006154",
					800: "#00392f",
					900: "#00120a", // Deepest accent shade
				},
				background: {
					100: "#10151b", // Main background (dark blue-gray)
					500: "#202a37",
				},
				neutral: {
					100: "#f1f1f1", // Light neutral for contrast
					500: "#696969", // Mid-gray for neutral elements
					900: "#2a2a2a", // Dark neutral
				},
		  }
		: {
				// Light color for light mode
				primary: {
					100: "#e1f4fb", // Light soft blue
					200: "#c2e9f7",
					300: "#a3ddf3",
					400: "#84d1ef",
					500: "#66c6eb", // Main primary color (light blue)
					600: "#51a1bd",
					700: "#3b7c8f",
					800: "#265861",
					900: "#132c30", // Darkest blue for accents
				},
				accent: {
					100: "#ffe8cc", // Light muted orange
					200: "#ffd199",
					300: "#ffba66",
					400: "#ffa333", // Main accent (orange)
					500: "#e68500",
					600: "#b36800",
					700: "#804c00",
					800: "#4c2f00",
					900: "#1a1300", // Deepest accent tone
				},
				background: {
					100: "#ffffff", // Light mode background (white)
					500: "#f5f5f5", // Softer white for larger areas
				},
				neutral: {
					100: "#fafafa", // Light neutral (off-white)
					500: "#c3c3c3", // Gray for neutral elements
					900: "#8f8f8f", // Darker gray for contrast
				},
		  }),
});

// MUI Theme settings
export const themeSettings = (mode) => {
	const colors = tokens(mode);

	return {
		palette: {
			mode: mode,
			...(mode === "dark"
				? {
						//palette values for dark mode
						primary: {
							main: colors.primary[500], // Use updated primary color for dark mode
						},
						secondary: {
							main: colors.accent[500], // Use updated accent color for dark mode
						},
						neutral: {
							dark: colors.neutral[900], // Darker neutral shade
							main: colors.neutral[500], // Main neutral color
							light: colors.neutral[100], // Lighter neutral shade
						},
						background: {
							default: colors.background[500], // Dark mode background color
						},
				  }
				: {
						//palette colors for light mode
						primary: {
							main: colors.primary[700], // Light mode primary color
						},
						secondary: {
							main: colors.accent[500], // Light mode accent color
						},
						neutral: {
							dark: colors.neutral[900], // Darker neutral shade
							main: colors.neutral[500], // Main neutral color
							light: colors.neutral[100], // Lighter neutral shade
						},
						background: {
							default: colors.background[500], // Light mode background color
						},
				  }),
		},
		typography: {
			fontFamily: ["Roboto", "sans-serif"].join(","),
			fontSize: 12,
			h1: {
				fontFamily: ["Roboto", "sans-serif"].join(","),
				fontSize: 40,
			},
			h2: {
				fontFamily: ["Roboto", "sans-serif"].join(","),
				fontSize: 32,
			},
			h3: {
				fontFamily: ["Roboto", "sans-serif"].join(","),
				fontSize: 24,
			},
			h4: {
				fontFamily: ["Roboto", "sans-serif"].join(","),
				fontSize: 20,
			},
			h5: {
				fontFamily: ["Roboto", "sans-serif"].join(","),
				fontSize: 16,
			},
			h6: {
				fontFamily: ["Roboto", "sans-serif"].join(","),
				fontSize: 14,
			},
		},
	};
};

// Context for the color mode
export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState("dark");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === "light" ? "dark" : "light")),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return [theme, colorMode];
};
