// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void; // no-op
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Força light SEMPRE
  const [isDark] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("light");
    root.classList.remove("dark");
  }, []);

  const toggleTheme = () => {}; // desativado

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
