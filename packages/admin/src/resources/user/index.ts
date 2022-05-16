import { UserEntity } from '@portfolio-calories-counter/database';
import { ResourceWithOptions } from 'adminjs';

export const usersResource: ResourceWithOptions = {
  resource: UserEntity,
  options: {
    navigation: {
      name: 'Users Management',
    },
  },
};
