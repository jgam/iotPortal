import axios from 'axios'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import Userinfo from './Userinfo'

function Auth({infoUsers, handler}) {
    // get props print them out here
    console.log('here is auth page');
    //console.log(infoUsers.resolve("openID"));
    var infoKeys = Object.keys(infoUsers)

    //getting the auth code
    var starting_index = window.location.href.indexOf('auth?code=') + 10;
    const auth_code = window.location.href.slice(starting_index);

    //from here the new code for getting the user profile
    const getUsers = async (handler) => {
      console.log('from here is the auth page, calling the api')
      var url_token = 'https://stg.app.rakuten.co.jp/engine/token?client_id=iot_pet_app&client_secret=dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4&grant_type=authorization_code&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access&code=' + auth_code
      let params = await axios.post(url_token)
      console.log(JSON.stringify(params.data))
      var url = 'https://stg.app.rakuten.co.jp/engine/api/MemberInformation/GetUserInfoSafe/20170926?access_token=' + params.data.access_token;
      let res = await axios.get(url);
      console.log(JSON.stringify(res.data));//{"openID":"mehdi"...}
      //here I should call the state update which will re-render parent component
      //first update the userinfo
      handler(true, res.data);
      //then update logged in status
     return res.data;
  }

  console.log(getUsers(handler));

    return (
      <div>
        <h2>Auth page is this</h2>
        <Router>
          <Redirect to={{
                pathname: "/userInfo",
                state: {user: 'testjgam'}
          }}
          />
        </Router>
      </div>
    );
  }


export default Auth;