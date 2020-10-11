import { Box, Flex, Image, Link, Stack, Tag as ChakraTag, Text, useColorMode } from '@chakra-ui/core';
import { Tag } from '../interfaces/Tag';
import { GithubIcon } from '../theme';

interface PortfolioItemProps {
  image: string;
  projectName: string;
  projectDescription: string;
  link: string;
  tags: Tag[];
  gitUrl: string;
}

const PortfolioItem = ({ image, projectName, projectDescription, link, tags, gitUrl }: PortfolioItemProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex flex='0 1 370px' mb='40px' flexDirection='column'>
      <Link _hover={{ textDecoration: 'none' }} href={link ?? '#'} isExternal>
        <Image src={image} borderRadius='5px' maxHeight='370px' alt={projectName} />
        <Box mt='20px'>
          <Text fontSize='18px' color={`${colorMode}.mainTitle`}>
            {projectName}
          </Text>
          <Text color={`${colorMode}.title`} fontWeight='300' fontSize='14px'>
            {projectDescription}
          </Text>
        </Box>
      </Link>

      <Stack mt='10px' spacing={2} isInline>
        {tags?.map((tag: Tag, index: number) => (
          <ChakraTag
            color={`${colorMode}.lightSlateGrey`}
            size='sm'
            backgroundColor='#f7fafc'
            fontWeight='300'
            fontSize='12px'
            verticalAlign='middle'
            key={index}>
            {tag.name}
          </ChakraTag>
        ))}
        {gitUrl && (
          <Link href={gitUrl} isExternal marginLeft='auto !important' marginRight='10px'>
            <GithubIcon boxSize='15px' color={`${colorMode}.mainTitle`} />
          </Link>
        )}
      </Stack>
    </Flex>
  );
};

export default PortfolioItem;
