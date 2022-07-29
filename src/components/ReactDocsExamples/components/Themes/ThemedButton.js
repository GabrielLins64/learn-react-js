import React, { useContext } from "react";
import { ThemeContext } from "./Index";

export default function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <button
      style={{ background: theme.background, color: theme.foreground }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}