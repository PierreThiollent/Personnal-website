import { Button, Icon } from '@chakra-ui/core';

const BackToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      name='back_to_top'
      onClick={scrollTop}
      position='absolute'
      right='30px'
      bottom={['70px', '30px']}
      bg='#f7fafc'
      _hover={{ backgroundColor: '#edf2f8' }}>
      <Icon name='arrow-up' size='18px' color='lightSlateGrey' />
    </Button>
  );
};

export default BackToTop;
