import { Button, Icon, useColorMode } from '@chakra-ui/core';

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode('light');
  return (
    <Button
      name='toggle_dark_mode'
      position='absolute'
      top='30px'
      right='30px'
      onClick={toggleColorMode}
      _hover={{ backgroundColor: 'transparent' }}
      _active={{ backgroundColor: 'transparent' }}
      bg='transparent'>
      {colorMode === 'light' ? (
        <Icon name='moon' size='24px' color={`${colorMode}.mainTitle`} />
      ) : (
        <Icon name='sun' size='24px' color={`${colorMode}.mainTitle`} />
      )}
    </Button>
  );
};

export default DarkModeButton;
