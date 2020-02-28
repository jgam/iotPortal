import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import GetUserInfo from './GetUserInfo';
import Auth from './Auth';
import Button from '@rakuten-rex/button';
import SignUpDesktop from '@rakuten-rex/sign-up-mobile';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

require('dotenv').config()

function countActiveUsers(users){
  console.log('counting the number of users...');
  return users.filter(user=> user.active).length;
}

function App() {

  /*
  const data = {
    'client_id': 'iot_pet_app',
    'client_secret': 'dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4',
    'grant_type':'password',
    'scope':'memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access',
    'username':'test-iot123@example.com',
    'password':'123456789',

  }
  const axios = require('axios');

// Make a request for a user with a given ID
    axios.post('http://stg.app.rakuten.co.jp/engine/token?',
      data)//client_id=iot_pet_app&client_secret=dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4&grant_type=password&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access&username=test-iot123@example.com&password=123456789')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log('*****');
        console.log(response.data.access_token);
        const authValue = 'OAuth2 ' + response.data.access_token
        //axios.post('http://stg.app.rakuten.co.jp/engine/api/MemberInformation/GetUserInfoSafe/20170926', {'Authorization': authValue})
      })
      .catch(function (error) {
        // handle error
        console.log('here is an error')
        console.log(error);
      })
      .then(function () {
        // always executed
      });
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
  function redirectStg(){
    return fetch('https://stg.grp03.id.rakuten.co.jp/rms/nid/login?service_id=i103&client_id=iot_pet_app&redirect_uri=https%3A%2F%2Fstg-gcp.iot.mobile.rakuten.co.jp%2Flivepets%2Fauth&scope=memberinfo_read_safebulk%2Cmemberinfo_read_details_safe%2Cmemberinfo_read_name%2C365days%40Refresh%2Copenid%2Cpnp_ios_register%2Copenid&contact_info_required=false&rae_service_id=')
  }
  return (
    <div>
      hello
      <br></br>
      <a href="https://stg.grp03.id.rakuten.co.jp/rms/nid/login?service_id=i103&client_id=iot_pet_app&redirect_uri=https%3A%2F%2Fstg-gcp.iot.mobile.rakuten.co.jp%2Flivepets%2Fauth&scope=memberinfo_read_safebulk%2Cmemberinfo_read_details_safe%2Cmemberinfo_read_name%2C365days%40Refresh%2Copenid%2Cpnp_ios_register%2Copenid&contact_info_required=false&rae_service_id=">go to Login</a>
      <GetUserInfo />
      <Button onClick={redirectStg}>
        Click me
      </Button>
      <Router>
        <Link to="/auth">auth</Link>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>

  )
  
}




export default App;