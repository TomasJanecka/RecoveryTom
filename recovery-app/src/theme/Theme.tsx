import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

const defaultTheme = {
  fontSize: "16px",
  fonts: ["sans-serif", "Roboto"],
};

const theme = {
  ...defaultTheme,
  colors: {
    main: "#dfcc74",
    second: "#06B49A",
    third: "#F1B888",
    text: "#AFDBD2",
  },
};

const darkTheme = {
  ...defaultTheme,
  colors: {
    main: "#dfcc74",
    second: "#0FB111",
    third: "#F1B888",
    text: "#AFFFD5",
  },
};

const Theme: FC<{ darkMode: boolean }> = ({ children, darkMode }) => (
  <ThemeProvider theme={darkMode ? darkTheme : theme}>{children}</ThemeProvider>
);

export default Theme;
