import { Box, Flex, Heading, Link, Text } from '@chakra-ui/core';
import Head from 'next/head';
import PortfolioItem from '../components/portfolioItem';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pierre Thiollent - Web Developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <style>@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');</style>
      <Flex justifyContent='center' flexDirection='column' height='80vh'>
        <Box maxWidth='1260px' px='30px' mx='auto' w='100%'>
          <Heading as='h1' fontWeight='700' fontSize='28px' color='darkblue'>
            Pierre Thiollent
          </Heading>
          <Heading as='h2' fontSize='16px' fontWeight='300' color='customGrey' lineHeight='1.8'>
            💻 Web Developer, UX/UI enthusiast
          </Heading>
          <Box mt='25px'>
            <Link
              href='https://github.com/PierreThiollent'
              isExternal
              fontSize='14px'
              color='#8B9CAC'
              fontWeight='300'
              mr='12px'
              _hover={{ textDecoration: 'none', color: 'tomato' }}
              _focus={{ outline: 'none' }}>
              GitHub
            </Link>
            <Link
              href='https://twitter.com/Pierre_t76'
              isExternal
              fontSize='14px'
              color='#8B9CAC'
              fontWeight='300'
              mr='12px'
              _hover={{ textDecoration: 'none', color: 'tomato' }}
              _focus={{ outline: 'none' }}>
              Twitter
            </Link>
            <Link
              href='https://www.linkedin.com/in/pierre-thiollent/'
              isExternal
              fontSize='14px'
              color='#8B9CAC'
              fontWeight='300'
              mr='12px'
              _hover={{ textDecoration: 'none', color: 'tomato' }}
              _focus={{ outline: 'none' }}>
              Linkedin
            </Link>
            <Link
              href='https://www.instagram.com/pierre_thiollent/'
              isExternal
              fontSize='14px'
              color='#8B9CAC'
              fontWeight='300'
              _hover={{ textDecoration: 'none', color: 'tomato' }}
              _focus={{ outline: 'none' }}>
              Instagram
            </Link>
          </Box>
          <Box mt='50px' maxW='700px'>
            <Text color='customGrey' fontWeight='300'>
              Hi 👋🏻, I'm Pierre Thiollent, I live in Rouen and I'm a Web and Mobile Developer. I code mostly in Javascript, React and React Native. I
              practice PHP and Symfony too. Check my work below ! ⬇️
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box mb='80px'>
        <Box maxWidth='1260px' px='30px' mx='auto' w='100%'>
          <Box mb='50px'>
            <Heading as='h3' color='darkblue' fontSize='25px' fontWeight='700'>
              Portfolio
            </Heading>
            <Text color='customGrey' fontWeight='300' lineHeight='1.8'>
              My latest projects
            </Text>
          </Box>
          <Flex justifyContent={['center', 'space-around', 'space-around', 'space-between']} alignItems='center' flexWrap='wrap'>
            <PortfolioItem
              image='todui.jpg'
              projectName='Todui'
              projectDescription='Task and project manager. Still in development.'
              link='https://todui.pierre-thiollent.fr'
            />
            <PortfolioItem
              image='frontendmentor-challenge.jpg'
              projectName='REST Countries API'
              projectDescription='Frontend challenge : integration and API calls.'
              link='https://frontend-mentor-challenge-react-js.vercel.app/'
            />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
          </Flex>
        </Box>
      </Box>
    </>
  );
}
