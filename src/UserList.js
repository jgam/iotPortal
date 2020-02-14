import React, { useEffect } from 'react';

function User({user, onRemove, onToggle}){
  useEffect(()=>{
    console.log('component shown on the screen');
    return() => {
      console.log('component dispapeared on the screen');
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }} onClick={()=> onToggle(user.id)}>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}> delete </button>
    </div>
  )
}

function UserList({users, onRemove, onToggle}){
  return(
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  )
}

export default UserList;
