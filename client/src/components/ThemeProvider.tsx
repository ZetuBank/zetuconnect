import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type ColorTheme = 'ocean' | 'sunset' | 'forest' | 'purple';
export type FontFamily = 'font-inter' | 'font-roboto' | 'font-poppins' | 'font-montserrat' | 'font-open-sans' | 'font-lato' | 'font-source-sans' | 'font-nunito' | 'font-raleway' | 'font-ubuntu' | 'font-quicksand' | 'font-playfair' | 'font-merriweather' | 'font-oswald' | 'font-dancing' | 'font-pacifico' | 'font-abril' | 'font-bebas' | 'font-righteous' | 'font-comfortaa';
export type FontSize = 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';

interface ThemeContextType {
  themeMode: ThemeMode;
  colorTheme: ColorTheme;
  fontFamily: FontFamily;
  fontSize: FontSize;
  setThemeMode: (mode: ThemeMode) => void;
  setColorTheme: (theme: ColorTheme) => void;
  setFontFamily: (font: FontFamily) => void;
  setFontSize: (size: FontSize) => void;
  resetPreferences: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>('light');
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('sunset');
  const [fontFamily, setFontFamilyState] = useState<FontFamily>('font-source-sans');
  const [fontSize, setFontSizeState] = useState<FontSize>('text-base');

  // Load preferences from localStorage
  useEffect(() => {
    const savedThemeMode = localStorage.getItem('zetu-theme-mode') as ThemeMode;
    const savedColorTheme = localStorage.getItem('zetu-color-theme') as ColorTheme;
    const savedFontFamily = localStorage.getItem('zetu-font-family') as FontFamily;
    const savedFontSize = localStorage.getItem('zetu-font-size') as FontSize;

    if (savedThemeMode) setThemeModeState(savedThemeMode);
    if (savedColorTheme) setColorThemeState(savedColorTheme);
    if (savedFontFamily) setFontFamilyState(savedFontFamily);
    if (savedFontSize) setFontSizeState(savedFontSize);
  }, []);

  // Apply theme mode to document
  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeMode]);

  // Apply color theme
  useEffect(() => {
    const root = document.documentElement;
    switch (colorTheme) {
      case 'sunset':
        root.style.setProperty('--color-zetu-primary', '#ea580c');
        root.style.setProperty('--color-zetu-secondary', '#dc2626');
        break;
      case 'forest':
        root.style.setProperty('--color-zetu-primary', '#059669');
        root.style.setProperty('--color-zetu-secondary', '#065f46');
        break;
      case 'purple':
        root.style.setProperty('--color-zetu-primary', '#7c3aed');
        root.style.setProperty('--color-zetu-secondary', '#5b21b6');
        break;
      default: // ocean
        root.style.setProperty('--color-zetu-primary', '#2563eb');
        root.style.setProperty('--color-zetu-secondary', '#059669');
    }
  }, [colorTheme]);

  // Apply font family and size to body
  useEffect(() => {
    const body = document.body;
    
    // Remove existing font classes
    const fontClasses = ['font-inter', 'font-roboto', 'font-poppins', 'font-montserrat', 'font-open-sans', 'font-lato', 'font-source-sans', 'font-nunito', 'font-raleway', 'font-ubuntu', 'font-quicksand', 'font-playfair', 'font-merriweather', 'font-oswald', 'font-dancing', 'font-pacifico', 'font-abril', 'font-bebas', 'font-righteous', 'font-comfortaa'];
    const sizeClasses = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
    
    fontClasses.forEach(cls => body.classList.remove(cls));
    sizeClasses.forEach(cls => body.classList.remove(cls));
    
    // Add current font classes
    body.classList.add(fontFamily, fontSize);
  }, [fontFamily, fontSize]);

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    localStorage.setItem('zetu-theme-mode', mode);
  };

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem('zetu-color-theme', theme);
  };

  const setFontFamily = (font: FontFamily) => {
    setFontFamilyState(font);
    localStorage.setItem('zetu-font-family', font);
  };

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('zetu-font-size', size);
  };

  const resetPreferences = () => {
    localStorage.removeItem('zetu-theme-mode');
    localStorage.removeItem('zetu-color-theme');
    localStorage.removeItem('zetu-font-family');
    localStorage.removeItem('zetu-font-size');
    setThemeModeState('light');
    setColorThemeState('sunset');
    setFontFamilyState('font-source-sans');
    setFontSizeState('text-base');
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        colorTheme,
        fontFamily,
        fontSize,
        setThemeMode,
        setColorTheme,
        setFontFamily,
        setFontSize,
        resetPreferences,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
