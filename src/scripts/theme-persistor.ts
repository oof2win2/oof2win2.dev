const themes = ["dark", "light", "system"] as const;

const DEFAULT_THEME = "system";
const THEME_KEY = "theme";

export type Theme = (typeof themes)[number];

function isValidTheme(input: string): input is Theme {
	return themes.includes(input as Theme);
}

export function getTheme(): Theme {
	const preferenceRaw = localStorage.getItem(THEME_KEY);
	const isValid = preferenceRaw && isValidTheme(preferenceRaw);

	const preference = isValid ? preferenceRaw : DEFAULT_THEME;

	if (!isValid) {
		setThemeDisplay(DEFAULT_THEME);
	}

	return preference;
}

function setKnownTheme(theme: "dark" | "light") {
	if (theme === "dark") {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
}

export function persistTheme(mode: Theme): void {
	localStorage.setItem(THEME_KEY, mode);
}

export function setThemeDisplay(mode: Theme): void {
	if (mode === "system") {
		const shouldBeDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		setKnownTheme(shouldBeDark ? "dark" : "light");
	} else {
		setKnownTheme(mode);
		persistTheme(mode);
	}
}

export function toggleTheme(): Theme {
	const nextTheme = document.documentElement.classList.contains("dark")
		? "light"
		: "dark";
	setThemeDisplay(nextTheme);
	return nextTheme;
}

// on change of the media query, the theme will be changed according to it
export function addThemeChangeListener(f: (mode: "dark" | "light") => void) {
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) => {
			const darkModeOn = e.matches;
			f(darkModeOn ? "dark" : "light");
		});
}

export function initializeTheme(): Theme {
	const theme = getTheme();
	addThemeChangeListener(setKnownTheme);
	setThemeDisplay(theme);
	return theme;
}
