import axios from 'axios'
import React, { useState, useEffect } from 'react';

function Auth({infoUsers}) {
    // get props print them out here
    console.log('here is auth page');
    console.log(infoUsers);
    //console.log(infoUsers.resolve("openID"));
    var infoKeys = Object.keys(infoUsers)

   
    return (
      <div>
        <h2>Auth page is this</h2>
        {infoKeys.map((value, index) => {
          if(infoUsers[value] != ''){
            return <li key={index}>{value} is {infoUsers[value]}</li>
          }
        })}
      </div>
    );
  }


export default Auth;