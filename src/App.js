import React from "react";
import Auth from './Auth';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Userinfo from './Userinfo'

export default class App extends React.Component {
    constructor(props){
      super(props)
      this.handler = this.handler.bind(this);
    }

    state = {
       users: [],
       userInfo: {},
       loggedIn : false,
    };

    handler(value1, value2) {
      console.log('handler activated!');
      this.setState({
        //maybe here spread...?
        userInfo: value2,
        loggedIn: value1
      })
    }
    /*
    <Router>
                <Link to="/auth"></Link>
                  <Switch>
                    <Route path="/auth">
                      <Auth infoUsers={this.state.userInfo}/>
                    </Route>
                </Switch>
              </Router>

              <Router>
                  <Switch>
                    <Route path="/userInfo/" component={Userinfo} />
                </Switch>
              </Router>
    */
    //when state changes maybe pass the info to /userInfo/ else: go into infoUsers
    
    render() {
      console.log('im in app .js');

       return (
          <div> Welcome to RMI iot portal boiz!
              <br></br>
              <a href="https://stg.grp03.id.rakuten.co.jp/rms/nid/login?service_id=i103&client_id=iot_pet_app&redirect_uri=https%3A%2F%2Fstg-gcp.iot.mobile.rakuten.co.jp/auth&scope=memberinfo_read_safebulk%2Cmemberinfo_read_details_safe%2Cmemberinfo_read_name%2C365days%40Refresh%2Copenid%2Cpnp_ios_register%2Copenid&contact_info_required=false&rae_service_id=">go to Login</a>
              
              {this.state.loggedIn ? (
                < Userinfo infoUsers={this.state.userInfo} handler={this.handler}/>
              ):(
                < Auth infoUsers={this.state.userInfo} handler={this.handler}/>
              )}

              
          </div>
       );
     }
}