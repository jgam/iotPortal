import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import GetUserInfo from './GetUserInfo';

function countActiveUsers(users){
  console.log('counting the number of users...');
  return users.filter(user=> user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: true

    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: true

    }
  ]);

  const nextId = useRef(4);

  const onToggle = useCallback(
    id => {
    console.log('onToggle!!');
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user)
    );
  },[users]);

  const onRemove = useCallback(
    id => {
    setUsers(users.filter(user => user.id !== id));
  },[users])

  const onCreate = useCallback(
    () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  },[users]);

  const count = useMemo(() => countActiveUsers(users), [users]);//memoization
  //if deps doesn't change, then we dont need to call countActiveUsers, if changed, then call the function
  //to rerender
  /* 
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div> active users: {count}</div>
    </>
  );
  */

  return (
    <div>
      hello
      <GetUserInfo />
    </div>
  )
}

export default App;