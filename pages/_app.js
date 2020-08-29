import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import DarkModeButton from '../components/darkModeButton';
import customTheme from '../theme';

function App({ Component, pageProps, children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        {children}
        <DarkModeButton />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
