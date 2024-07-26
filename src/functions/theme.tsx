import { Theme } from "@/context/theme";

export function getOppositeTheme(theme: Theme) {
    return theme === "light" ? "dark" : "light";
}
