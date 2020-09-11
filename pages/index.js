import { Box, Flex, Heading, Link as ChakraLink, Stack, Tag, Text } from '@chakra-ui/core';
import Lottie from 'lottie-react-web';
import Head from 'next/head';
import Link from 'next/link';
import PortfolioItem from '../components/portfolioItem';
import { getSortedPostsData } from '../lib/posts';
import animation from '../public/lottie-animation.json';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Pierre Thiollent - Web Developer</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='google-site-verification' content='_Tg56-iiZIYfCkGM9nJOIs8j-lrOlCPKL0WmG-FRQVU' />
        <meta name='description' content='Pierre Thiollent, French Web Developer living in Rouen, France.' />
      </Head>
      <Flex alignItems='center' height='80vh'>
        <Flex maxWidth='1260px' px='30px' mx='auto' w='100%' justifyContent='space-between' alignItems='flex-end'>
          <Box>
            <Heading as='h1' fontWeight='700' fontSize='28px' color='darkGrey'>
              Pierre Thiollent
            </Heading>
            <Heading as='h2' fontSize='16px' fontWeight='300' color='customGrey' lineHeight='1.8'>
              💻 Web Developer, UX/UI enthusiast
            </Heading>
            <Box mt='25px'>
              <ChakraLink
                href='https://github.com/PierreThiollent'
                isExternal
                fontSize='14px'
                color='lightSlateGrey'
                fontWeight='300'
                mr='12px'
                _hover={{ textDecoration: 'none', color: 'tomato' }}
                _focus={{ outline: 'none' }}>
                GitHub
              </ChakraLink>
              <ChakraLink
                href='https://twitter.com/Pierre_t76'
                isExternal
                fontSize='14px'
                color='lightSlateGrey'
                fontWeight='300'
                mr='12px'
                _hover={{ textDecoration: 'none', color: 'tomato' }}
                _focus={{ outline: 'none' }}>
                Twitter
              </ChakraLink>
              <ChakraLink
                href='https://www.linkedin.com/in/pierre-thiollent/'
                isExternal
                fontSize='14px'
                color='lightSlateGrey'
                fontWeight='300'
                mr='12px'
                _hover={{ textDecoration: 'none', color: 'tomato' }}
                _focus={{ outline: 'none' }}>
                Linkedin
              </ChakraLink>
              <ChakraLink
                href='https://www.instagram.com/pierre_thiollent/'
                isExternal
                fontSize='14px'
                color='lightSlateGrey'
                fontWeight='300'
                _hover={{ textDecoration: 'none', color: 'tomato' }}
                _focus={{ outline: 'none' }}>
                Instagram
              </ChakraLink>
            </Box>
            <Box mt='50px' maxW='700px'>
              <Text color='customGrey' fontWeight='300'>
                Hi 👋🏻, I'm Pierre Thiollent, I live in Rouen and I'm a Web and Mobile Developer. I code mostly in Javascript, React and React Native.
                I practice PHP and Symfony too. Check my work below ! ⬇️
              </Text>
            </Box>
          </Box>
          <Lottie
            options={{
              animationData: animation,
            }}
            width={150}
            height={150}
            style={{ margin: 0 }}
          />
        </Flex>
      </Flex>
      <Box>
        <Box maxWidth='1260px' px='30px' mx='auto' w='100%'>
          <Box mb='50px'>
            <Heading as='h3' color='darkGrey' fontSize='25px' fontWeight='700'>
              Portfolio
            </Heading>
            <Text color='customGrey' fontWeight='300' lineHeight='1.8'>
              My latest projects
            </Text>
          </Box>
          <Flex justifyContent={['center', 'space-around', 'space-around', 'space-around', 'space-between']} alignItems='baseline' flexWrap='wrap'>
            <PortfolioItem
              image='todui.jpg'
              projectName='Todui'
              projectDescription='Task and project manager. Still in development.'
              link='https://todui.pierre-thiollent.fr'
              tags={['Next.js', 'MongoDB']}
            />
            <PortfolioItem
              image='frontendmentor-challenge.jpg'
              projectName='REST Countries API'
              projectDescription='Frontend challenge : integration and API calls.'
              link='https://frontend-mentor-challenge-react-js.vercel.app/'
              tags={['React.js']}
              gitUrl='https://github.com/PierreThiollent/Frontend-mentor-challenge-React-js'
            />
            <PortfolioItem
              image='node-url-shortener.jpg'
              projectName='URL shortener API'
              projectDescription='FreeCodeCamp challenge : URL shortener API with Node.'
              link='https://github.com/PierreThiollent/Url-shortener-api'
              tags={['Node.js', 'Express', 'MongoDB']}
              gitUrl='https://github.com/PierreThiollent/Url-shortener-api'
            />
            <PortfolioItem
              image='placeholder.jpg'
              projectName='Node and Express API'
              projectDescription='OpenClassrooms course : my first API !'
              link='https://github.com/PierreThiollent/Node-Express-MongoDB-API'
              tags={['Node.js', 'Express', 'MongoDB']}
              gitUrl='https://github.com/PierreThiollent/Node-Express-MongoDB-API'
            />
            <PortfolioItem
              image='mini-cms-symfony.jpg'
              projectName='Blog Symfony'
              projectDescription='Mini blog / CMS with Symfony.'
              link='https://github.com/PierreThiollent/Mini-CMS-with-Symfony'
              tags={['Symfony', 'MySQL']}
              gitUrl='https://github.com/PierreThiollent/Mini-CMS-with-Symfony'
            />
            <PortfolioItem
              image='memory-game.jpg'
              projectName='Memory game'
              projectDescription='The memory game developed with React.js'
              link='https://memory-game-tau.vercel.app/'
              tags={['React.js']}
              gitUrl='https://github.com/PierreThiollent/Memory-game'
            />
          </Flex>
          <Text mt='20px'>More projects coming soon...</Text>
        </Box>
      </Box>
      {allPostsData.length > 0 && (
        <Box my='120px'>
          <Box maxWidth='1260px' px='30px' mx='auto' w='100%'>
            <Box mb='50px'>
              <Heading as='h3' color='darkGrey' fontSize='25px' fontWeight='700'>
                Posts
              </Heading>
              <Text color='customGrey' fontWeight='300' lineHeight='1.8'>
                My latest blog posts
              </Text>
            </Box>
            <Flex justifyContent='space-between' alignItems='baseline' flexWrap='wrap'>
              {allPostsData.slice(0, 3).map(({ id, date, title, categories }) => (
                <Flex key={id} flexDirection='column' flex='0 1 370px'>
                  <Link href='/posts/[id]' as={`/posts/${id}`}>
                    <a style={{ fontSize: '18px', color: '#27303F' }}>{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                  <Stack mt='10px' spacing={2} isInline>
                    {categories &&
                      categories.map((category, index) => (
                        <Tag
                          color='lightSlateGrey'
                          size='sm'
                          backgroundColor='#f7fafc'
                          fontWeight='300'
                          fontSize='12px'
                          verticalAlign='middle'
                          key={index}>
                          {category}
                        </Tag>
                      ))}
                  </Stack>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
