import { ReactNode } from "react";

export interface ThemeProviderProps {
	mode?: "light" | "dark";
	children: ReactNode;
}
