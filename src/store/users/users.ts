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
    addUser: ({ list }, action: PayloadAction<UserType>) => {
      list.push(action.payload);
    },
    updateUser: ({ list }, action) => {
      const userIndex = list.findIndex(
        (item) => item.phone === action.payload.phone,
      );
      if (userIndex !== -1) {
        list[userIndex] = action.payload;
      }
    },
    deleteUser: ({ list }, action) => {
      const userIndex = list.findIndex(
        (user) => user.phone === action.payload.phone,
      );
      list.slice(userIndex, 1);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = actions;
export { reducer };
