import { Box, useColorMode } from '@chakra-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box backgroundColor={`${colorMode}.background`}>
        <Box maxWidth='1260px' px='30px' mx='auto' w='100%'>
          <article>
            <h1>{postData.title}</h1>
            <div>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
