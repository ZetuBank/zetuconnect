import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Palette, Sun, Moon, RotateCcw } from 'lucide-react';
import { useTheme, type ColorTheme, type FontFamily, type FontSize } from './ThemeProvider';

const fontOptions = [
  { value: 'font-inter', label: 'Inter' },
  { value: 'font-roboto', label: 'Roboto' },
  { value: 'font-poppins', label: 'Poppins' },
  { value: 'font-montserrat', label: 'Montserrat' },
  { value: 'font-open-sans', label: 'Open Sans' },
  { value: 'font-lato', label: 'Lato' },
  { value: 'font-source-sans', label: 'Source Sans Pro' },
  { value: 'font-nunito', label: 'Nunito' },
  { value: 'font-raleway', label: 'Raleway' },
  { value: 'font-ubuntu', label: 'Ubuntu' },
  { value: 'font-quicksand', label: 'Quicksand' },
  { value: 'font-playfair', label: 'Playfair Display' },
  { value: 'font-merriweather', label: 'Merriweather' },
  { value: 'font-oswald', label: 'Oswald' },
  { value: 'font-dancing', label: 'Dancing Script' },
  { value: 'font-pacifico', label: 'Pacifico' },
  { value: 'font-abril', label: 'Abril Fatface' },
  { value: 'font-bebas', label: 'Bebas Neue' },
  { value: 'font-righteous', label: 'Righteous' },
  { value: 'font-comfortaa', label: 'Comfortaa' },
];

const colorThemes = [
  { value: 'ocean', label: 'Ocean', color: 'bg-blue-500' },
  { value: 'sunset', label: 'Sunset', color: 'bg-orange-500' },
  { value: 'forest', label: 'Forest', color: 'bg-green-500' },
  { value: 'purple', label: 'Purple', color: 'bg-purple-500' },
];

export const ThemeCustomizer: React.FC = () => {
  const {
    themeMode,
    colorTheme,
    fontFamily,
    fontSize,
    setThemeMode,
    setColorTheme,
    setFontFamily,
    setFontSize,
    resetPreferences,
  } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden sm:flex items-center space-x-2"
          data-testid="button-customize-theme"
        >
          <Palette className="h-4 w-4" />
          <span>Customize</span>
        </Button>
      </SheetTrigger>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="sm:hidden"
          data-testid="button-customize-theme-mobile"
        >
          <Palette className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-80 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Customize App</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-6 mt-6">
          {/* Theme Mode Toggle */}
          <div>
            <label className="text-sm font-medium mb-3 block">Theme Mode</label>
            <div className="flex space-x-2">
              <Button
                variant={themeMode === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setThemeMode('light')}
                className="flex items-center space-x-2"
                data-testid="button-light-mode"
              >
                <Sun className="h-4 w-4" />
                <span>Light</span>
              </Button>
              <Button
                variant={themeMode === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setThemeMode('dark')}
                className="flex items-center space-x-2"
                data-testid="button-dark-mode"
              >
                <Moon className="h-4 w-4" />
                <span>Dark</span>
              </Button>
            </div>
          </div>

          {/* Color Theme Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">Color Theme</label>
            <div className="grid grid-cols-2 gap-2">
              {colorThemes.map((theme) => (
                <Button
                  key={theme.value}
                  variant={colorTheme === theme.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setColorTheme(theme.value as ColorTheme)}
                  className="flex items-center space-x-2 justify-start"
                  data-testid={`button-color-theme-${theme.value}`}
                >
                  <div className={`w-4 h-4 rounded-full ${theme.color}`} />
                  <span>{theme.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Font Family Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">Font Family</label>
            <Select value={fontFamily} onValueChange={(value) => setFontFamily(value as FontFamily)}>
              <SelectTrigger data-testid="select-font-family">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fontOptions.map((font) => (
                  <SelectItem key={font.value} value={font.value}>
                    {font.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Font Size Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">Font Size</label>
            <Select value={fontSize} onValueChange={(value) => setFontSize(value as FontSize)}>
              <SelectTrigger data-testid="select-font-size">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text-sm">Small</SelectItem>
                <SelectItem value="text-base">Normal</SelectItem>
                <SelectItem value="text-lg">Large</SelectItem>
                <SelectItem value="text-xl">Extra Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reset Button */}
          <Button
            variant="outline"
            onClick={resetPreferences}
            className="w-full flex items-center space-x-2"
            data-testid="button-reset-preferences"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset to Default</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
