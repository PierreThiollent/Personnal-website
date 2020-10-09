import { Box, Flex, Image, Link, Text, useColorMode } from '@chakra-ui/core';

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box backgroundColor={`${colorMode}.background`}>
      <Flex justifyContent='center' alignItems='center' py='50px' flexDirection='column'>
        <Text color={`${colorMode}.mainTitle`} fontWeight='300'>
          Developped by Pierre Thiollent with ❤️ and
          <Link href='https://nextjs.org/' isExternal title='Next.js' ml='2px'>
            <Image src='/favicon.ico' alt='Vercel' maxW='21px' display='inline-block' verticalAlign='middle' />
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
