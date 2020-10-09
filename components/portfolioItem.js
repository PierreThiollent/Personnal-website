import { Box, Flex, Icon, Image, Link, Stack, Tag, Text, useColorMode } from '@chakra-ui/core';

const PortfolioItem = ({ image, projectName, projectDescription, link, tags, gitUrl }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex flex='0 1 370px' mb='40px' flexDirection='column'>
      <Link _hover={{ textDecoration: 'none' }} href={`${link ? link : '#'}`} isExternal>
        <Image src={`${image}`} borderRadius='5px' maxHeight='370px' alt={`${projectName}`} />
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
        {tags &&
          tags.map((tag, index) => (
            <Tag
              color={`${colorMode}.lightSlateGrey`}
              size='sm'
              backgroundColor='#f7fafc'
              fontWeight='300'
              fontSize='12px'
              verticalAlign='middle'
              key={index}>
              {tag.name}
            </Tag>
          ))}
        {gitUrl && (
          <Link href={`${gitUrl}`} isExternal w='max-content' ml='auto' marginRight='10px'>
            <Icon name='github' size='15px' color={`${colorMode}.mainTitle`} />
          </Link>
        )}
      </Stack>
    </Flex>
  );
};

export default PortfolioItem;
