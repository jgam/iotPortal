import React from "react";
import axios from "axios";

export default class App extends React.Component {
    state = {
       users: []
    };
    componentDidMount() {
       this.getUsers();
    }

    getUsers = async () => {
      var url_token = 'https://stg.app.rakuten.co.jp/engine/token?client_id=iot_pet_app&client_secret=dCkhfdFPgZd626ldN7oEv9p5XHG0r9lLEcR3Q-5qurL4&grant_type=password&scope=memberinfo_read_safebulk,memberinfo_read_details_safe,memberinfo_read_name,365days@Refresh,openid,pnp_ios_register,openid profile,idinfo_read_encrypted_easyid,pnp_android_register,30days@Access&username=test-iot123@example.com&password=123456789'
      let params = await axios.post(url_token)
      console.log(JSON.stringify(params.data))
     var url = 'https://stg.app.rakuten.co.jp/engine/api/MemberInformation/GetUserInfoSafe/20170926?access_token=' + params.data.access_token;
     let res = await axios.get(url);
     console.log(JSON.stringify(res.data));
	}
    
    render() {
       return (
          <div> test
              <a href="https://stg.grp03.id.rakuten.co.jp/rms/nid/login?service_id=i103&client_id=iot_pet_app&redirect_uri=https%3A%2F%2Fstg-gcp.iot.mobile.rakuten.co.jp/auth&scope=memberinfo_read_safebulk%2Cmemberinfo_read_details_safe%2Cmemberinfo_read_name%2C365days%40Refresh%2Copenid%2Cpnp_ios_register%2Copenid&contact_info_required=false&rae_service_id=">go to Login</a>
      
          </div>
       );
     }
}