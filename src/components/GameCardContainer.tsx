import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}



const GameCardContainer = ({ children }: Props) => {
  return (
    <Box maxW='sm' borderRadius={5} overflow="hidden">
      { children }
    </Box>
  )
}

export default GameCardContainer