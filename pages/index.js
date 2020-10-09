import { Box, Flex, Heading, Link as ChakraLink, Text, useColorMode } from '@chakra-ui/core';
import Lottie from 'lottie-react-web';
import Head from 'next/head';
import PortfolioItem from '../components/portfolioItem';
import { config } from '../config';
import { getSortedProjects } from '../lib/projects';
import animationDark from '../public/lottie-animation-dark.json';
import animation from '../public/lottie-animation.json';

export default function Home({ projects }) {
  const { colorMode } = useColorMode(null);

  return (
    <>
      <Head>
        <title>Pierre Thiollent - Web Developer</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='google-site-verification' content='_Tg56-iiZIYfCkGM9nJOIs8j-lrOlCPKL0WmG-FRQVU' />
        <meta name='description' content='Pierre Thiollent, French Web Developer living in Rouen, France.' />
      </Head>
      <Box backgroundColor={`${colorMode}.background`}>
        <Flex as='header' alignItems='center' height='80vh'>
          <Flex maxWidth='1280px' px='50px' mx='auto' w='100%' justifyContent='space-between' alignItems='flex-end'>
            <Box>
              <Heading as='h1' fontWeight='700' fontSize='28px' color={`${colorMode}.mainTitle`}>
                Pierre Thiollent
              </Heading>
              <Heading as='h2' fontSize='16px' fontWeight='300' color={`${colorMode}.title`} lineHeight='1.8'>
                💻 Web Developer, UX/UI enthusiast
              </Heading>
              <Box mt='25px'>
                <ChakraLink
                  href='https://github.com/PierreThiollent'
                  isExternal
                  fontSize='14px'
                  color={`${colorMode}.socialLinks`}
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
                  color={`${colorMode}.socialLinks`}
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
                  color={`${colorMode}.socialLinks`}
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
                  color={`${colorMode}.socialLinks`}
                  fontWeight='300'
                  _hover={{ textDecoration: 'none', color: 'tomato' }}
                  _focus={{ outline: 'none' }}>
                  Instagram
                </ChakraLink>
              </Box>
              <Box mt='50px' maxW='700px'>
                <Text color={`${colorMode}.title`} fontWeight='300'>
                  Hi 👋🏻, I'm Pierre Thiollent, I live in Rouen and I'm a Web and Mobile Developer. I code mostly in Javascript, React and React
                  Native. I practice PHP and Symfony too. Check my work below ! ⬇️
                </Text>
              </Box>
            </Box>
            <Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
              {colorMode === 'light' ? (
                <Lottie
                  options={{
                    animationData: animation,
                  }}
                  width={150}
                  height={150}
                  style={{ margin: 0 }}
                />
              ) : (
                <Lottie
                  options={{
                    animationData: animationDark,
                  }}
                  width={150}
                  height={150}
                  style={{ margin: 0 }}
                />
              )}
            </Box>
          </Flex>
        </Flex>
        <Box>
          <Box maxWidth='1280px' px='50px' mx='auto' w='100%'>
            <Box mb='50px'>
              <Heading as='h3' color={`${colorMode}.mainTitle`} fontSize='25px' fontWeight='700'>
                Portfolio
              </Heading>
              <Text color={`${colorMode}.title`} fontWeight='300' lineHeight='1.8'>
                My latest projects
              </Text>
            </Box>
            <Flex justifyContent={['center', 'space-around', 'space-around', 'space-around', 'space-between']} alignItems='baseline' flexWrap='wrap'>
              {projects.map((project, index) => (
                <PortfolioItem
                  image={`${config.API_URL}${project.image.url}`}
                  projectName={project.name}
                  projectDescription={project.description}
                  link={project.url}
                  tags={project.project_tags}
                  gitUrl={project.github_url}
                  key={index}
                />
              ))}
            </Flex>
            <Text color={`${colorMode}.title`} mt='20px' pb='80px'>
              More projects coming soon...
            </Text>
          </Box>
        </Box>
        {/* {allPostsData.length > 0 && (
          <Box py='120px'>
            <Box maxWidth='1260px' px='30px' mx='auto' w='100%'>
              <Box mb='50px'>
                <Heading as='h3' color={`${colorMode}.mainTitle`} fontSize='25px' fontWeight='700'>
                  Posts
                </Heading>
                <Text color={`${colorMode}.title`} fontWeight='300' lineHeight='1.8'>
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
                    <small style={{ color: '#606B80' }}>
                      <Date dateString={date} />
                    </small>
                    <Stack mt='10px' spacing={2} isInline>
                      {categories &&
                        categories.map((category, index) => (
                          <Tag
                            color={`${colorMode}.lightSlateGrey`}
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
        )} */}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  const projects = await getSortedProjects();

  return {
    props: {
      // allPostsData,
      projects,
    },
  };
}
