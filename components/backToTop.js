import { Button, Icon } from '@chakra-ui/core';

const BackToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      name='Back to top'
      onClick={scrollTop}
      position='absolute'
      right='30px'
      bottom={['70px', '30px']}
      bg='#f7fafc'
      _hover={{ backgroundColor: '#edf2f8' }}>
      <Icon name='arrow-up' size='18px' color='#8B9CAC' />
    </Button>
  );
};

export default BackToTop;
