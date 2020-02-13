import React, {Component, useEffect} from 'react'
import {render} from 'react-dom'
import axios from 'axios'


function GetUserInfo(){
    /*
    axios.post('http://stg.app.rakuten.co.jp/engine/token?client_id=iot_pet_app&client_secret=dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4&grant_type=password&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access&username=test-iot123@example.com&password=123456789',
    {
        params: {
            headers: {"Access-Control-Allow-Origin": true}
        }
    }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    */
    //render(){
        return (
            <div> getToken
            </div>
        );
    //}
    
}

export default GetUserInfo;