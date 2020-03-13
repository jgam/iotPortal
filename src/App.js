import React from "react";
import axios from "axios";
import Auth from './Auth';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

export default class App extends React.Component {

    state = {
       users: [],
       userInfo: {}
    };

    componentDidMount() {
       this.getUsers().then(result => this.setState({
         userInfo:result
       }));
    }

    getUsers = async () => {
      var url_token = 'https://stg.app.rakuten.co.jp/engine/token?client_id=iot_pet_app&client_secret=dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4&grant_type=password&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access&username=test-iot123@example.com&password=123456789'
      //var url_token = 'https://stg.app.rakuten.co.jp/engine/token?client_id=iot_pet_app&client_secret=dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4&grant_type=authorization_code&code=&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access'
      let params = await axios.post(url_token)
      console.log(JSON.stringify(params.data))
     var url = 'https://stg.app.rakuten.co.jp/engine/api/MemberInformation/GetUserInfoSafe/20170926?access_token=' + params.data.access_token;
     let res = await axios.get(url);
     console.log(JSON.stringify(res.data));//{"openID":"mehdi"...}
     //Promise.resolve();// this one resoles the promise
     return res.data;
	}
    
    render() {
       return (
          <div> Welcome to RMI iot portal boiz!
              <br></br>
              <a href="https://stg.grp03.id.rakuten.co.jp/rms/nid/login?service_id=i103&client_id=iot_pet_app&redirect_uri=https%3A%2F%2Fstg-gcp.iot.mobile.rakuten.co.jp/auth&scope=memberinfo_read_safebulk%2Cmemberinfo_read_details_safe%2Cmemberinfo_read_name%2C365days%40Refresh%2Copenid%2Cpnp_ios_register%2Copenid&contact_info_required=false&rae_service_id=">go to Login</a>
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
}