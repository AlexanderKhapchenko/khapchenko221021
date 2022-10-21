import React, { useEffect } from 'react';

import data from './assets/data/initData.json';
import { UsersWidget } from './components/users-widget/users-widget';
import { useAppDispatch, useAppSelector } from './hooks/store/store.hooks';
import { setUsers } from './store/users/users';
import './App.css';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.list);

  useEffect(() => {
    dispatch(setUsers(data));
  });

  return (
    <div className="App">
      {users.length ? <UsersWidget users={users} /> : <h3>Loading...</h3>}
    </div>
  );
};

export { App };
