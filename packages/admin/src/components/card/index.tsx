import * as React from 'react';
import { Box, Label } from '@adminjs/design-system';

type CardProps = {
  title: string;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Box
      borderRadius={10}
      backgroundColor={'white'}
      padding={16}
      margin={16}
      boxShadow="card"
      flexGrow={1}
    >
      <Label size={'lg'} fontWeight={700} fontSize={16}>
        {props.title}
      </Label>
      {props.children}
    </Box>
  );
};
