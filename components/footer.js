import { Flex, Image, Link, Text } from '@chakra-ui/core';

const Footer = () => (
  <footer>
    <Flex justifyContent='center' alignItems='center' py='20px' flexDirection='column'>
      <Text color='darkblue' fontWeight='300'>
        Developped by Pierre Thiollent with ❤️ and
        <Link href='https://nextjs.org/' isExternal title='Next.js' ml='2px'>
          <Image src='/favicon.ico' alt='Vercel' maxW='21px' display='inline-block' verticalAlign='middle' />
        </Link>
      </Text>
    </Flex>
  </footer>
);

export default Footer;
