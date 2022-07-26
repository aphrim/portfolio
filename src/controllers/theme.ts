//Theme manager. Allows for setting of the theme, as well as loading the last set theme from cookies.
import { readCookies, setCookie } from './cookie';

export let themes = {
    Gruvbox: {
        bg: "#282828",
        fg: "#899984",
        highlight: "#98971a",
        secondary: "#928374",
    },
    Dracula: {
        bg: "#282a36",
        fg: "#f8f8f2",
        highlight: "#bd93f9",
        secondary: "#6272a4",
    },
    Solarized: {
        bg: "#002b36",
        fg: "#93a1a1",
        highlight: "#268bd2",
        secondary: "#839496"
    },
    Nord: {
        bg: "#2e3440",
        fg: "#4c566a",
        highlight: "#88c0d0",
        secondary: "#5e81ac"
    },
    Monokai: {
        bg: "#272822",
        fg: "#f8f8f2",
        highlight: "#66d9ef",
        secondary: "#cfcfc2"
    }
}

export function loadTheme() {
    console.log("Loading theme");
    const theme = readCookies().theme || "Gruvbox";
    setTheme(theme);
}

export function setTheme(themeName: string) {
    let theme = themes[themeName];
    Object.keys(theme).forEach((key) => {
        (document.querySelector(':root') as HTMLElement).style.setProperty(`--${key}`, theme[key]);
    });
    document.body.style.background = theme['bg'];
    console.log(theme['bg']);
    setCookie("theme", themeName);
}

export function getTheme(): string {
    return readCookies().theme || "Gruvbox";
}
