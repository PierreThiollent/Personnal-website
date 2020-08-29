import { Box, Flex, Image, Link, Text } from '@chakra-ui/core';

const PortfolioItem = ({ image, projectName, projectDescription, link }) => (
  <Flex flex='0 1 370px' mb='30px'>
    <Link _hover={{ textDecoration: 'none' }} href={`${link}`} isExternal>
      <Image src={`/${image}`} borderRadius='5px' maxHeight='370px' />
      <Box mt='20px'>
        <Text fontSize='18px' color='darkblue'>
          {projectName}
        </Text>
        <Text color='customGrey' fontWeight='300' fontSize='14px'>
          {projectDescription}
        </Text>
      </Box>
    </Link>
  </Flex>
);

export default PortfolioItem;
