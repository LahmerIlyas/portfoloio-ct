import * as React from 'react';
import { Card } from '../../../components';
import { Text } from '@adminjs/design-system';

type CountStatsCardProps = {
  title: string;
  count: number;
};

export const CountStatsCard: React.FC<CountStatsCardProps> = (props) => {
  return (
    <Card title={props.title}>
      <Text variant={'lg'}>{props.count}</Text>
    </Card>
  );
};
