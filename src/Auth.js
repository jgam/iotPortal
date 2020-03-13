import axios from 'axios'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

function Auth({infoUsers}) {
    // get props print them out here
    console.log('here is auth page');
    console.log(infoUsers);
    //console.log(infoUsers.resolve("openID"));
    var infoKeys = Object.keys(infoUsers)

    //here I have to grab auth parameter
    console.log(window.location.pathname); //yields: "/js" (where snippets run)
    console.log(window.location.href); //auth code ->
    var starting_index = window.location.href.indexOf('auth?code=') + 10;

    const auth_code = window.location.href.slice(starting_index);
    console.log(auth_code);

    //from here the new code for getting the user profile
    const getUsers = async () => {
      console.log('from here is the auth page, calling the api')
      //var url_token = 'https://stg.app.rakuten.co.jp/engine/token?client_id=iot_pet_app&client_secret=dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4&grant_type=password&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access'//&username=test-iot123@example.com&password=123456789'
      var url_token = 'https://stg.app.rakuten.co.jp/engine/token?client_id=iot_pet_app&client_secret=dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4&grant_type=authorization_code&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access&code=' + auth_code
      //var url_token = 'https://stg.app.rakuten.co.jp/engine/token?client_id=iot_pet_app&client_secret=dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4&grant_type=authorization_code&code=&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access'
      let params = await axios.post(url_token)
      console.log(JSON.stringify(params.data))
     var url = 'https://stg.app.rakuten.co.jp/engine/api/MemberInformation/GetUserInfoSafe/20170926?access_token=' + params.data.access_token;
     let res = await axios.get(url);
     console.log(JSON.stringify(res.data));//{"openID":"mehdi"...}
     //Promise.resolve();// this one resoles the promise
     return res.data;
  }
  
  var newinfoUsers = getUsers();
  var newinfoKeys;
  newinfoKeys = Object.keys(newinfoUsers)

   
    return (
      <div>
        <h2>Auth page is this</h2>
        {newinfoKeys.map((value, index) => {
          if(newinfoUsers[value] != ''){
            return <li key={index}>{value} is {newinfoUsers[value]}</li>
          }
        })}
        <Router>
          <Link to="/auth"></Link>
            <Switch>
              <Route path="/auth">
                <Auth infoUsers={this.state.userInfo}/>
              </Route>
          </Switch>
        </Router>
      </div>
    );
  }


export default Auth;