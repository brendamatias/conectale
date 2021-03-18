import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';

import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export default function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <button type="button" onClick={toggleTheme}>
        Switch Theme
      </button>

      <div className="container">Hello World</div>
    </ThemeProvider>
  );
}
