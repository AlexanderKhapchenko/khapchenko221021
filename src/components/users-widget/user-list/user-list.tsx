import React, { useState } from 'react';

import { UserType } from '../../../common/types';
import './styles.css';

interface UserListProps {
  users: Array<UserType>;
  setUserDetail: (user: UserType | null) => void;
}

const UserList: React.FC<UserListProps> = ({ users, setUserDetail }) => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="listContainer">
      {users.slice(0, viewAll ? users.length : 3).map((user) => (
        <div className="container" key={user.phone}>
          <img
            src={`./images/${user.photo}`}
            alt={user.name}
            className="avatar"
          />
          <div className="nameContainer">
            <p className="name">{user.name}</p>
            <p className="nickname">{user.nickname}</p>
          </div>
          <button
            className="viewButton"
            onClick={(): void => setUserDetail(user)}
          >
            View
          </button>
        </div>
      ))}
      <div className="container">
        <button
          className="viewAllButton"
          onClick={(): void => setViewAll(!viewAll)}
        >
          {viewAll ? 'Hide' : 'View All'}
        </button>
      </div>
    </div>
  );
};

export { UserList };
