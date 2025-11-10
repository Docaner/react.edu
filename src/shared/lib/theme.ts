import { createContext, useContext } from 'react';
import { ThemeT, ThemeContextI } from 'shared/consts';

export const ThemeContext = createContext<ThemeContextI>({
    theme: 'light',
    setTheme: () => { },
})

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return { theme, toggleTheme };
}