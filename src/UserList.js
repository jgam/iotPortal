import React from 'react';

function UserList() {
  const users = [
    {
      id: 1,
      username: 'jgam',
      email: 'jgam@nd.edu'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  return (
    <div>
      {users.map(user => (
        <div>
          <b>{user.username}</b> <span>({user.email})</span>
        </div>
      ))}
    </div>
  );
}

export default UserList;
