import { configureStore } from '@reduxjs/toolkit';

import { reducer as users } from './users/users';

const store = configureStore({
  reducer: {
    users,
  },
});

export { store };
