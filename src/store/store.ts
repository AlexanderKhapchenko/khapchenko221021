import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

import { UserType } from '../common/types';
import { reducer as users } from './users/users';

export const createReduxStore = (
  initialState: Array<UserType> | [],
): EnhancedStore => {
  return configureStore({
    reducer: {
      users,
    },
    preloadedState: {
      users: {
        list: initialState,
      },
    },
  });
};

export const store = createReduxStore([]);
