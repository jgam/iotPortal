import React from 'react'

function Userinfo({infoUsers, handler}) {
    console.log('im in userinfo js');
    console.log(infoUsers)
    console.log(infoUsers.openId);
    console.log(infoUsers.emailAddress)

    //here use the map key to display all the information
    return (
        <div>
            this is useinfo
            Welcome {infoUsers.firstName}! Mr. {infoUsers.lastName}, I appreciate you so much today!

            Your information is the following:
            Email address : {infoUsers.emailAddress}
        </div>
    )
}

export default Userinfo
