import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../common/types';

interface InitialState {
  list: Array<UserType>;
}

const initialState: InitialState = {
  list: [],
};

const { reducer, actions } = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Array<UserType>>) => {
      state.list = action.payload;
    },
  },
});

export const { setUsers } = actions;
export { reducer };
