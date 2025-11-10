
import {ThemeProvider} from './theme';

export const Providers:FC = ({children}) => (
    <ThemeProvider>
        {children}
    </ThemeProvider>
)