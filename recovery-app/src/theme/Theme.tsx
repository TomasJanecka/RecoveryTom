import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main: "#FFFDF9",
    second: "#06B49A",
    text: "#AFDBD2",
  },
  fonts: ["sans-serif", "Roboto"],
};

const darkTheme = {
  colors: {
    main: "#2F4DF9",
    second: "#0FB111",
    text: "#AFFFD5",
  },
  fonts: ["sans-serif", "Roboto"],
};

const Theme: FC<{ darkMode: boolean }> = ({ children, darkMode }) => (
  <ThemeProvider theme={darkMode ? darkTheme : theme}>{children}</ThemeProvider>
);

export default Theme;
