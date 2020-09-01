import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import DarkModeButton from '../components/darkModeButton';
import Footer from '../components/footer';
import Test from '../components/test';
import '../style/global.css';
import customTheme from '../theme';

function App({ Component, pageProps, children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        {children}
        <Component {...pageProps} />
        <DarkModeButton />
        <Test />
        <Footer />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
