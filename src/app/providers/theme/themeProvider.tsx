import {FC, useState, useEffect} from 'react';
import {ThemeT} from 'shared/consts';
import {ThemeContext} from 'shared/lib';

const THEME_KEY = 'theme'

export const ThemeProvider:FC = ({children}) => {
    const [theme, setTheme] = useState<ThemeT>(()=> {
        const localTheme = localStorage.getItem(THEME_KEY);

        if(localTheme !== 'light' && localTheme !== 'dark')
            return 'light';

        return localTheme;
    })

    useEffect(() => {
        document.body.dataset.theme = theme;
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}