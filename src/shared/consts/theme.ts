export type ThemeT = 'light' | 'dark'

export interface ThemeContextI {
    theme: ThemeT
    setTheme: (theme: ThemeT) => void
}