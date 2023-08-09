import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const LOCAL_STORAGE_THEME_KEY = 'theme_key';

export enum Theme {
  LIGHT_THEME = 'light_theme',
  DARK_THEME = 'dark_theme',
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({});

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.LIGHT_THEME
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
