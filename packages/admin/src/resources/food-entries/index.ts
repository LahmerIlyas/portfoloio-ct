import { FoodEntryEntity } from '@toptal-calories-counter/database';
import { ResourceWithOptions } from 'adminjs';

export const foodEntriesResource: ResourceWithOptions = {
  resource: FoodEntryEntity,
  options: {
    navigation: {
      name: 'Users Management',
    },
  },
};
