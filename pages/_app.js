import { ChakraProvider } from '@chakra-ui/core';
import BackToTop from '../components/backToTop';
import DarkModeButton from '../components/darkModeButton';
import Footer from '../components/footer';
import '../style/global.css';
import customTheme from '../theme';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
      <DarkModeButton />
      <BackToTop />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
