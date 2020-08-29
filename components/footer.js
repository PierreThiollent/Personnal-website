import { Flex, Image, Link, Text } from '@chakra-ui/core';

const Footer = () => (
  <footer>
    <Flex justifyContent='center' alignItems='center' py='20px'>
      <Text color='darkblue'>
        Developped by Pierre Thiollent with ❤️ and
        <Link href='https://nextjs.org/' isExternal title='Next.js' ml='2px'>
          <Image src='/favicon.ico' alt='Vercel' maxW='20px' display='inline-block' verticalAlign='text-top' />
        </Link>
      </Text>
    </Flex>
  </footer>
);

export default Footer;
