import { Button, useColorMode } from '@chakra-ui/core';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

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
        <MoonIcon boxSize='20px' color={`${colorMode}.mainTitle`} />
      ) : (
        <SunIcon boxSize='20px' color={`${colorMode}.mainTitle`} />
      )}
    </Button>
  );
};

export default DarkModeButton;
