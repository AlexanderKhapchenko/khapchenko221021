import React, { useState } from 'react';

import { UserType } from '../../common/types';
import { UserDetail } from './user-detail/user-detail';
import { UserList } from './user-list/user-list';

interface UsersWidgetProps {
  users: Array<UserType>;
}

const UsersWidget: React.FC<UsersWidgetProps> = ({ users }) => {
  const [userDetail, setUserDetail] = useState<UserType | null>(null);
  return (
    <div>
      {userDetail ? (
        <UserDetail user={userDetail} setUserDetail={setUserDetail} />
      ) : (
        <UserList users={users} setUserDetail={setUserDetail} />
      )}
    </div>
  );
};

export { UsersWidget };
