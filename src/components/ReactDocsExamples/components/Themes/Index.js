import React, { useState } from "react";
import Toolbar from "./Toolbar";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

export default function ThemeTest() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], setTheme: setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export { ThemeContext }