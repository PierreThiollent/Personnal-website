import { Button, Icon, useColorMode } from '@chakra-ui/core';

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Button
      position='fixed'
      top='30px'
      right='30px'
      onClick={toggleColorMode}
      _hover={{ backgroundColor: 'transparent' }}
      _active={{ backgroundColor: 'transparent' }}
      bg='transparent'>
      {colorMode === 'light' ? <Icon name='sun' size='24px' color='darkblue' /> : <Icon name='moon' size='24px' color='darkblue' />}
    </Button>
  );
};

export default DarkModeButton;
