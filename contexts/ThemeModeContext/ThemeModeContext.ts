// Dependencies
import { createContext } from "react";

export const ThemeModeContext = createContext({
	toggleColorMode: () => {},
	mode: null
});
