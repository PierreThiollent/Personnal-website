// * https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui
import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    body: 'Ubuntu, sans-serif',
    heading: 'Ubuntu, sans-serif',
    mono: 'Ubuntu, sans-serif',
  },
  colors: {
    ...theme.colors,
    darkblue: '#273140',
    customGrey: '#626D83',
  },
};

export default customTheme;
