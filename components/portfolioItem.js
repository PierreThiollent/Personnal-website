import { Box, Flex, Icon, Image, Link, Stack, Tag, Text } from '@chakra-ui/core';

const PortfolioItem = ({ image, projectName, projectDescription, link, tags, gitUrl }) => (
  <Flex flex='0 1 370px' mb='40px' flexDirection='column'>
    <Link _hover={{ textDecoration: 'none' }} href={`${link}`} isExternal>
      <Image src={`/${image}`} borderRadius='5px' maxHeight='370px' alt={`${projectName}`} />
      <Box mt='20px'>
        <Text fontSize='18px' color='darkGrey'>
          {projectName}
        </Text>
        <Text color='customGrey' fontWeight='300' fontSize='14px'>
          {projectDescription}
        </Text>
      </Box>
    </Link>
    <Stack mt='10px' spacing={2} isInline>
      {tags &&
        tags.map((tag, index) => (
          <Tag color='lightSlateGrey' size='sm' backgroundColor='#f7fafc' fontWeight='300' fontSize='12px' verticalAlign='middle' key={index}>
            {tag}
          </Tag>
        ))}
      {gitUrl && (
        <Link href={`${gitUrl}`} isExternal w='max-content' ml='auto' marginRight='10px'>
          <Icon name='github' size='15px' color='darkGrey' />
        </Link>
      )}
    </Stack>
  </Flex>
);

export default PortfolioItem;
