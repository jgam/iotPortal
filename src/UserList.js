import React from 'react';

function UserList({users}) {
  
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
